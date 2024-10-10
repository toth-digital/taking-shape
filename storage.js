// Function to get a value from LocalStorage
function getStorageItem(key) {
	return localStorage.getItem(key);
}

// Function to set a value in LocalStorage
function setStorageItem(key, value) {
	localStorage.setItem(key, value);
}

// Function to remove a value from LocalStorage
function removeStorageItem(key) {
	localStorage.removeItem(key);
}

// Function to check if a key exists in LocalStorage
function hasStorageItem(key) {
	return localStorage.getItem(key) !== null;
}

// Expose these functions to the global scope so Godot can access them
window.getStorageItem = getStorageItem;
window.setStorageItem = setStorageItem;
window.removeStorageItem = removeStorageItem;
window.hasStorageItem = hasStorageItem;
