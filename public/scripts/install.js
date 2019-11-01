'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// CODELAB: beforeinstallprompt olay dinleyicisini ekleyin.


/**
 * beforeinstallprompt olay işleyicisi.
 *   Etkinliği kaydeder ve yükleme düğmesini gösterir.
 *
 * @param {Event} evt
 */
function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Etkinliği kaydetmek ve yükleme düğmesini göstermek için gerekli kodları ekleyin.

}


/**
 * butInstall olay işleyicisi - PWA'nın kurulumunu yapar.
 *
 * @param {Event} evt
 */
function installPWA(evt) {
  // CODELAB: Kurulum istemini gösterin ve kurulum düğmesini gizleyin.

  // CODELAB: Kullanıcının yanıtını logla.

}

// CODELAB: appinstalled olay işleyicisini ekleyin.

/**
 * appinstalled olay işleyicisi.
 *   Yükleme ile bilgileri loglar.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
  // CODELAB: Yükleme bilgilerini loglayın.

}
