/**
 * ==========================================================================
 * STUDY BATTLE - Real Authentication & Session Engine (auth.js)
 * Manages Persistent Registration, Real Login Validation, User Isolation,
 * State Synchronization, and Guest Access Flow
 * ==========================================================================
 */

const AUTH_TOKEN_KEY = 'sb_auth_session';
const USERS_DB_KEY = 'sb_registered_users';
const DEMO_USER_UID = 'uid_demo_alex_hunter';

/**
 * Retrieves the database of registered user accounts from localStorage
 */
function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(USERS_DB_KEY);
    if (!raw) {
      // Seed default sample accounts
      const defaultUsers = [
        {
          ...DEFAULT_USER,
          uid: DEMO_USER_UID,
          password: 'battle123',
          avatar: 'assets/images/default-avatar.svg',
          joinedDate: 'Oct 2026',
          studyHours: 14.5,
          bio: 'Competitive coder sharpening Python algorithms and full-stack battle skills.'
        }
      ];
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(defaultUsers));
      return defaultUsers;
    }
    const parsed = JSON.parse(raw);
    let demoAcc = parsed.find(u => u.email && u.email.toLowerCase() === 'alex.hunter@studybattle.dev');
    if (!demoAcc) {
      demoAcc = {
        ...DEFAULT_USER,
        uid: DEMO_USER_UID,
        password: 'battle123',
        avatar: 'assets/images/default-avatar.svg',
        joinedDate: 'Oct 2026',
        studyHours: 14.5,
        bio: 'Competitive coder sharpening Python algorithms and full-stack battle skills.'
      };
      parsed.unshift(demoAcc);
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    return [
      {
        ...DEFAULT_USER,
        uid: DEMO_USER_UID,
        password: 'battle123',
        avatar: 'assets/images/default-avatar.svg',
        joinedDate: 'Oct 2026',
        studyHours: 14.5,
        bio: 'Competitive coder sharpening Python algorithms and full-stack battle skills.'
      }
    ];
  }
}

/**
 * Persists the registered users array to localStorage
 */
function saveRegisteredUsers(users) {
  try {
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Error saving users database:', e);
  }
}

/**
 * Finds a registered user account by email address (case-insensitive)
 */
function findRegisteredUser(email) {
  if (!email) return null;
  const users = getRegisteredUsers();
  return users.find(u => u.email && u.email.trim().toLowerCase() === email.trim().toLowerCase()) || null;
}

/**
 * Updates a registered user's saved data in the database
 */
function updateRegisteredUser(updatedUser) {
  if (!updatedUser || (!updatedUser.email && !updatedUser.uid)) return;
  const users = getRegisteredUsers();
  const index = users.findIndex(u => 
    (updatedUser.uid && u.uid === updatedUser.uid) || 
    (updatedUser.email && u.email && u.email.toLowerCase() === updatedUser.email.toLowerCase())
  );
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
  } else {
    users.push(updatedUser);
  }
  saveRegisteredUsers(users);
}

/**
 * Checks if the user is currently authenticated in the session
 */
function isAuthenticated() {
  return localStorage.getItem(AUTH_TOKEN_KEY) !== null;
}

/**
 * Route guard: Redirects or initializes session if needed
 */
function requireAuth() {
  if (!isAuthenticated()) {
    initGuestSession();
  }
}

/**
 * Sets active session token with real user UID, email, and name
 */
function setUserSession(userEmail, userName, userUid) {
  localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify({
    authenticated: true,
    uid: userUid,
    email: userEmail,
    name: userName,
    loginTimestamp: new Date().toISOString()
  }));
}

// Backward compatibility alias
function initDemoSession(userEmail = 'alex.hunter@studybattle.dev', userName = 'Alex Hunter', userUid = DEMO_USER_UID) {
  setUserSession(userEmail, userName, userUid);
}

/**
 * Initializes Guest Access / Direct Dashboard session
 */
function initGuestSession() {
  const guestUser = {
    ...DEFAULT_USER,
    uid: DEMO_USER_UID,
    name: 'Alex Hunter',
    email: 'alex.hunter@studybattle.dev',
    avatar: 'assets/images/default-avatar.svg',
    level: 4,
    levelTitle: 'Code Gladiator',
    xp: 1250,
    xpCurrentLevel: 250,
    xpRequiredLevel: 800,
    streak: 3,
    battlesCompleted: 12,
    accuracy: 84,
    studyHours: 14.5,
    dailyEarnedXp: 120,
    dailyGoalXp: 200,
    favoriteSubject: 'Python',
    joinedDate: 'Oct 2026',
    bio: 'Competitive coder sharpening Python algorithms and full-stack battle skills.',
    settings: {
      theme: 'default',
      soundEnabled: true,
      notificationsEnabled: true,
      timerMode: 'strict'
    }
  };

  setUserSession(guestUser.email, guestUser.name, DEMO_USER_UID);
  saveUser(guestUser);
}

/**
 * Logs out user, clears active session, and redirects to login
 */
function logoutUser() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  showToast('Logged out successfully. See you in the Arena!', 'info');
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 400);
}

// --------------------------------------------------------------------------
// PASSWORD TOGGLE HELPER
// --------------------------------------------------------------------------
function setupPasswordToggles() {
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetInputId = btn.getAttribute('data-target');
      const input = document.getElementById(targetInputId);
      if (!input) return;

      const isPassword = input.getAttribute('type') === 'password';
      input.setAttribute('type', isPassword ? 'text' : 'password');

      btn.innerHTML = isPassword
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
             <line x1="1" y1="1" x2="23" y2="23"></line>
           </svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
             <circle cx="12" cy="12" r="3"></circle>
           </svg>`;
    });
  });
}

// --------------------------------------------------------------------------
// LOGIN FORM HANDLER (Real Validation & State Management)
// --------------------------------------------------------------------------
function setupLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const errorContainer = document.getElementById('loginError');
  const forgotPwBtn = document.getElementById('forgotPasswordLink');
  const guestBtn = document.getElementById('guestAccessBtn');

  // Retain Guest Access
  if (guestBtn) {
    guestBtn.addEventListener('click', () => {
      initGuestSession();
    });
  }

  // Suppress autofill values on initial render
  if (emailInput) {
    emailInput.value = '';
    emailInput.setAttribute('autocomplete', 'off');
  }
  if (passwordInput) {
    passwordInput.value = '';
    passwordInput.setAttribute('autocomplete', 'new-password');
  }

  // Forgot Password trigger
  if (forgotPwBtn) {
    forgotPwBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email) {
        showToast('🔑 Please enter your registered email address first.', 'info', 3500);
        if (emailInput) emailInput.focus();
      } else {
        const found = findRegisteredUser(email);
        if (found) {
          showToast(`🔑 Verified! Your registered password is: "${found.password}"`, 'info', 6000);
          if (passwordInput) passwordInput.value = found.password;
        } else {
          showToast(`❌ No account registered under "${email}".`, 'error', 3500);
        }
      }
      playAudio('click');
    });
  }

  const handleLoginSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';

    // Real field validation
    if (!email) {
      showError(errorContainer, 'Please enter your email address.');
      emailInput.focus();
      playAudio('wrong');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(errorContainer, 'Please enter a valid email address (e.g. gladiator@studybattle.dev).');
      emailInput.focus();
      playAudio('wrong');
      return;
    }

    if (!password) {
      showError(errorContainer, 'Please enter your password.');
      passwordInput.focus();
      playAudio('wrong');
      return;
    }

    // Authenticate against database
    const userRecord = findRegisteredUser(email);

    if (!userRecord) {
      showError(errorContainer, `No gladiator account found for "${email}". Please verify your email or click Create Account below to register.`);
      emailInput.focus();
      playAudio('wrong');
      return;
    }

    if (userRecord.password && userRecord.password !== password) {
      showError(errorContainer, 'Incorrect password. Please verify your credentials and try again.');
      passwordInput.focus();
      playAudio('wrong');
      return;
    }

    // Generate/verify UID
    const userUid = userRecord.uid || (userRecord.email.toLowerCase() === 'alex.hunter@studybattle.dev' ? DEMO_USER_UID : 'uid_' + Date.now());
    userRecord.uid = userUid;

    // Successful Login! Clear error, set active state
    hideError(errorContainer);
    setUserSession(userRecord.email, userRecord.name, userUid);
    saveUser(userRecord);

    playAudio('correct');
    showToast(`⚔️ Welcome back, ${userRecord.name}! Entering Battle Arena...`, 'success', 1800);

    // Immediate navigation to dashboard
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 200);
  };

  form.addEventListener('submit', handleLoginSubmit);

  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', (e) => {
      handleLoginSubmit(e);
    });
  }
}

// --------------------------------------------------------------------------
// SIGNUP FORM HANDLER (Real Account Creation with Isolated State)
// --------------------------------------------------------------------------
function setupSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  const nameInput = document.getElementById('signupName');
  const emailInput = document.getElementById('signupEmail');
  const passwordInput = document.getElementById('signupPassword');
  const confirmPasswordInput = document.getElementById('signupConfirmPassword');
  const errorContainer = document.getElementById('signupError');
  const matchIndicator = document.getElementById('passwordMatchIndicator');
  const termsCheck = document.getElementById('termsCheck');

  // Suppress autofill values on mount
  if (nameInput) nameInput.value = '';
  if (emailInput) emailInput.value = '';
  if (passwordInput) passwordInput.value = '';
  if (confirmPasswordInput) confirmPasswordInput.value = '';

  // Live Password Match Check
  if (confirmPasswordInput && passwordInput && matchIndicator) {
    const checkMatch = () => {
      if (!confirmPasswordInput.value) {
        matchIndicator.textContent = '';
        return;
      }
      if (confirmPasswordInput.value === passwordInput.value) {
        matchIndicator.textContent = '✅ Passwords match';
        matchIndicator.style.color = 'var(--success)';
      } else {
        matchIndicator.textContent = '❌ Passwords do not match';
        matchIndicator.style.color = 'var(--danger)';
      }
    };
    passwordInput.addEventListener('input', checkMatch);
    confirmPasswordInput.addEventListener('input', checkMatch);
  }

  const handleSignupSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';
    const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

    // Validation
    if (!name || name.length < 2) {
      showError(errorContainer, 'Please enter your full name or gamer tag (at least 2 characters).');
      if (nameInput) nameInput.focus();
      playAudio('wrong');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showError(errorContainer, 'Please enter a valid email address (e.g. name@studybattle.dev).');
      if (emailInput) emailInput.focus();
      playAudio('wrong');
      return;
    }

    // Duplicate Email Check
    const existingUser = findRegisteredUser(email);
    if (existingUser) {
      showError(errorContainer, `An account with "${email}" is already registered. Please login or use a different email.`);
      if (emailInput) emailInput.focus();
      playAudio('wrong');
      return;
    }

    if (!password || password.length < 6) {
      showError(errorContainer, 'Password must be at least 6 characters long.');
      if (passwordInput) passwordInput.focus();
      playAudio('wrong');
      return;
    }

    if (password !== confirmPassword) {
      showError(errorContainer, 'Passwords do not match. Please verify both fields.');
      if (confirmPasswordInput) confirmPasswordInput.focus();
      playAudio('wrong');
      return;
    }

    if (termsCheck && !termsCheck.checked) {
      showError(errorContainer, 'Please agree to the Honor Code of the Battle Arena.');
      playAudio('wrong');
      return;
    }

    hideError(errorContainer);

    // Generate unique UID for complete user isolation
    const newUid = 'uid_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);

    // Fresh Start Profile (Level 1, 0 XP, 0 Streak, 0 Badges)
    const newUser = {
      uid: newUid,
      name: name,
      email: email,
      password: password,
      avatar: 'assets/images/default-avatar.svg',
      level: 1,
      levelTitle: 'Novice Fighter',
      xp: 0,
      xpCurrentLevel: 0,
      xpRequiredLevel: 250,
      streak: 0,
      battlesCompleted: 0,
      accuracy: 0,
      studyHours: 0,
      dailyEarnedXp: 0,
      dailyGoalXp: 200,
      favoriteSubject: 'Python',
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      bio: 'New gladiator ready to master coding and battle concepts.',
      settings: {
        theme: 'default',
        soundEnabled: true,
        notificationsEnabled: true,
        timerMode: 'strict'
      }
    };

    // Save into persistent registered users database
    const users = getRegisteredUsers();
    users.push(newUser);
    saveRegisteredUsers(users);

    // 1. ISOLATED BATTLE HISTORY
    localStorage.setItem(`sb_user_${newUid}_history`, JSON.stringify([]));

    // 2. ISOLATED ACHIEVEMENTS
    const freshAchievements = DATA_ACHIEVEMENTS.map(ach => ({
      ...ach,
      unlocked: false,
      progress: 0
    }));
    localStorage.setItem(`sb_user_${newUid}_achievements`, JSON.stringify(freshAchievements));

    // 3. ISOLATED PROFILE
    localStorage.setItem(`sb_user_${newUid}_profile`, JSON.stringify(newUser));

    // Set active session & save user
    setUserSession(email, name, newUid);
    saveUser(newUser);

    playAudio('correct');
    showToast(`🎉 Welcome to Study Battle Arena, ${name}! Your fresh profile is ready.`, 'success', 2200);

    // Immediate navigation to dashboard
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 250);
  };

  form.addEventListener('submit', handleSignupSubmit);

  const signupSubmitBtn = document.getElementById('signupSubmitBtn');
  if (signupSubmitBtn) {
    signupSubmitBtn.addEventListener('click', (e) => {
      handleSignupSubmit(e);
    });
  }
}

function showError(container, msg) {
  if (!container) return;
  container.textContent = msg;
  container.classList.add('visible');
}

function hideError(container) {
  if (!container) return;
  container.textContent = '';
  container.classList.remove('visible');
}

// --------------------------------------------------------------------------
// LOGOUT CONFIRMATION MODAL HELPER
// --------------------------------------------------------------------------
function setupLogoutModal() {
  const logoutBtns = document.querySelectorAll('.action-logout');
  if (logoutBtns.length === 0) return;

  let modal = document.getElementById('logoutConfirmModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'logoutConfirmModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-box" style="max-width: 440px;">
        <div class="modal-header">
          <div class="modal-title">⚔️ Leave Study Battle Arena?</div>
          <span class="modal-close-btn" data-close-modal="logoutConfirmModal">&times;</span>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to log out? Your progress, XP, and streak are safely stored in your registered account.</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-close-modal="logoutConfirmModal">Cancel</button>
          <button class="btn btn-danger" id="confirmLogoutSubmitBtn">Log Out</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('[data-close-modal="logoutConfirmModal"]').addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.querySelector('.btn-secondary').addEventListener('click', () => {
      modal.classList.remove('active');
    });
    modal.querySelector('#confirmLogoutSubmitBtn').addEventListener('click', () => {
      logoutUser();
    });
  }

  logoutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      playAudio('click');
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupPasswordToggles();
  setupLoginForm();
  setupSignupForm();
  setupLogoutModal();
});
