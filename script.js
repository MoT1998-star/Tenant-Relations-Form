/* ==========================================================================
   AmTrust Realty — Tenant Profile
   Handles: scroll progress + reveal animation, "Other" field reveals,
   sports-team tag input, days-in-month population, validation,
   submission-object assembly, and the success state swap.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
   * 1. Scroll progress bar
   * ------------------------------------------------------------------ */
  var progressFill = document.getElementById("progressFill");

  function updateProgress() {
    var doc = document.documentElement;
    var scrollTop = doc.scrollTop || document.body.scrollTop;
    var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    if (progressFill) progressFill.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ------------------------------------------------------------------
   * 2. Reveal-on-scroll for each form section
   * ------------------------------------------------------------------ */
  var revealTargets = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ------------------------------------------------------------------
   * 3. Populate the "Day" select based on days-in-month (leap-safe default)
   * ------------------------------------------------------------------ */
  var monthSelect = document.getElementById("birthdayMonth");
  var daySelect = document.getElementById("birthdayDay");

  function populateDays(daysInMonth) {
    var current = daySelect.value;
    daySelect.innerHTML = '<option value="">Day</option>';
    for (var d = 1; d <= daysInMonth; d++) {
      var opt = document.createElement("option");
      opt.value = String(d);
      opt.textContent = String(d);
      daySelect.appendChild(opt);
    }
    if (current && Number(current) <= daysInMonth) daySelect.value = current;
  }

  var DAYS_BY_MONTH = { 1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31 };
  populateDays(31);
  monthSelect.addEventListener("change", function () {
    var days = DAYS_BY_MONTH[Number(monthSelect.value)] || 31;
    populateDays(days);
  });

  /* ------------------------------------------------------------------
   * 4. "Other" checkbox reveals a free-text field
   * ------------------------------------------------------------------ */
  document.querySelectorAll("[data-other-toggle]").forEach(function (checkbox) {
    var targetField = document.getElementById(checkbox.getAttribute("data-other-toggle"));
    if (!targetField) return;
    checkbox.addEventListener("change", function () {
      targetField.classList.toggle("is-hidden", !checkbox.checked);
      if (checkbox.checked) {
        targetField.focus();
      } else {
        targetField.value = "";
      }
    });
  });

  /* Building "Other" reveal (select, not checkbox) */
  var buildingSelect = document.getElementById("building");
  var buildingOther = document.getElementById("buildingOther");
  buildingSelect.addEventListener("change", function () {
    var isOther = buildingSelect.value === "Other";
    buildingOther.classList.toggle("is-hidden", !isOther);
    if (isOther) buildingOther.focus();
    else buildingOther.value = "";
  });

  /* ------------------------------------------------------------------
   * 5. Sports team tag input (free-text, multiple values)
   * ------------------------------------------------------------------ */
  var sportsTeams = [];
  var sportsInput = document.getElementById("sportsTeamInput");
  var sportsTagList = document.getElementById("sportsTagList");

  function renderTags() {
    sportsTagList.innerHTML = "";
    sportsTeams.forEach(function (team, index) {
      var chip = document.createElement("span");
      chip.className = "tag-chip";
      var label = document.createElement("span");
      label.textContent = team;
      var removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.textContent = "×";
      removeBtn.setAttribute("aria-label", "Remove " + team);
      removeBtn.addEventListener("click", function () {
        sportsTeams.splice(index, 1);
        renderTags();
        sportsInput.focus();
      });
      chip.appendChild(label);
      chip.appendChild(removeBtn);
      sportsTagList.appendChild(chip);
    });
  }

  function addTeam(raw) {
    var value = raw.trim().replace(/,$/, "").trim();
    if (!value) return;
    if (sportsTeams.indexOf(value) === -1) sportsTeams.push(value);
    sportsInput.value = "";
    renderTags();
  }

  sportsInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTeam(sportsInput.value);
    } else if (e.key === "Backspace" && sportsInput.value === "" && sportsTeams.length) {
      sportsTeams.pop();
      renderTags();
    }
  });
  sportsInput.addEventListener("blur", function () {
    if (sportsInput.value.trim()) addTeam(sportsInput.value);
  });

  /* ------------------------------------------------------------------
   * 6. Validation helpers
   * ------------------------------------------------------------------ */
  var form = document.getElementById("tenantForm");

  function setError(fieldId, message) {
    var input = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + "-error");
    if (input) input.classList.toggle("field-invalid", !!message);
    if (errorEl) errorEl.textContent = message || "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validate() {
    var valid = true;

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var consent = document.getElementById("consent");
    var consentError = document.getElementById("consent-error");

    if (!firstName.value.trim()) {
      setError("firstName", "Please share your first name.");
      valid = false;
    } else setError("firstName", "");

    if (!lastName.value.trim()) {
      setError("lastName", "Please share your last name.");
      valid = false;
    } else setError("lastName", "");

    if (!email.value.trim()) {
      setError("email", "Please share an email address.");
      valid = false;
    } else if (!isValidEmail(email.value.trim())) {
      setError("email", "That email address doesn't look quite right.");
      valid = false;
    } else setError("email", "");

    if (!consent.checked) {
      consentError.textContent = "Please check the box to let us know it's okay to save this.";
      valid = false;
    } else {
      consentError.textContent = "";
    }

    return valid;
  }

  /* ------------------------------------------------------------------
   * 7. Build the clean submission object
   * ------------------------------------------------------------------ */
  function getCheckedValues(name) {
    return Array.prototype.slice
      .call(form.querySelectorAll('input[name="' + name + '"]:checked'))
      .map(function (el) { return el.value; });
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function buildSubmission() {
    return {
      // Section 1 — About You
      firstName: val("firstName"),
      lastName: val("lastName"),
      company: val("company"),
      building: val("building"),
      buildingOther: val("buildingOther"),
      email: val("email"),
      birthdayMonth: val("birthdayMonth"),
      birthdayDay: val("birthdayDay"),
      birthdayYear: val("birthdayYear"),

      // Section 2 — Your Favorites
      favoriteSportsTeams: sportsTeams.slice(),
      favoriteRestaurant: val("favoriteRestaurant"),
      favoriteRestaurantsOther: val("favoriteRestaurantsOther"),
      favoriteCoffee: val("favoriteCoffee"),
      favoriteDrink: val("favoriteDrink"),
      favoriteSnack: val("favoriteSnack"),
      favoriteCuisines: getCheckedValues("favoriteCuisines"),
      favoriteCuisinesOther: val("cuisinesOther"),

      // Section 3 — Outside the Office
      hobbies: getCheckedValues("hobbies"),
      otherHobbies: val("otherHobbies"),

      // Section 4 — Travel
      favoriteVacationDestination: val("favoriteVacationDestination"),
      dreamDestination: val("dreamDestination"),
      vacationTypes: getCheckedValues("vacationTypes"),
      vacationTypesOther: val("vacationTypesOther"),

      // Section 5 — A Few More Things
      favoriteCharity: val("favoriteCharity"),
      favoriteMusic: val("favoriteMusic"),
      favoriteEntertainment: val("favoriteEntertainment"),
      passions: val("passions"),
      additionalNotes: val("additionalNotes"),

      // Gift preferences
      giftPreferences: getCheckedValues("giftPreferences"),
      giftRestrictions: val("giftRestrictions"),

      // Consent + metadata
      consent: document.getElementById("consent").checked,
      submittedAt: new Date().toISOString(),
      source: "amtrust-tenant-profile-form"
    };
  }

  /* ------------------------------------------------------------------
   * 8. Submit handler
   *
   * >>> BACKEND / API CONNECTION POINT <<<
   * Replace SUBMISSION_ENDPOINT with the real endpoint once a backend is
   * chosen (Supabase, Airtable, Power Automate/Dataverse, Google Sheets
   * via Apps Script, etc.), then uncomment the fetch() call below.
   * The `payload` object already contains every field, cleanly named,
   * ready to be sent as JSON.
   * ------------------------------------------------------------------ */
  var SUBMISSION_ENDPOINT = ""; // e.g. "https://your-backend.example.com/api/tenant-profile"

  function submitToBackend(payload) {
    // --- Real submission (enable once SUBMISSION_ENDPOINT is set) ---
    // return fetch(SUBMISSION_ENDPOINT, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload)
    // });

    // --- Placeholder while no backend is connected ---
    console.log("Tenant profile submission (no backend connected yet):", payload);
    return Promise.resolve({ ok: true });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstInvalid = form.querySelector(".field-invalid, #consent:invalid");
      if (firstInvalid) firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    var payload = buildSubmission();
    var submitBtn = form.querySelector(".btn-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";

    submitToBackend(payload)
      .then(function () {
        showSuccess();
      })
      .catch(function (err) {
        console.error("Submission failed:", err);
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit My Profile";
        alert("Something went wrong sending your profile. Please try again in a moment.");
      });
  });

  /* ------------------------------------------------------------------
   * 9. Success state (no page reload)
   * ------------------------------------------------------------------ */
  function showSuccess() {
    form.classList.add("is-hidden");
    var success = document.getElementById("successState");
    success.classList.remove("is-hidden");
    success.setAttribute("tabindex", "-1");
    success.scrollIntoView({ behavior: "smooth", block: "start" });
    success.focus();
  }
})();
