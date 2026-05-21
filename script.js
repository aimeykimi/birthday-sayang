// PASSWORD

const correctPassword = "iloveyou";

function checkPassword(){

  const enteredPassword =
  document.getElementById("password").value;

  if(enteredPassword === correctPassword){

    document.getElementById("password-screen").style.display = "none";

    document.getElementById("main-content").style.display = "block";

  } else {

    document.getElementById("error").innerHTML =
    "Wrong Password 💔";
  }
}

// MUSIC

function playMusic(){
  document.getElementById("bgMusic").play();
}

// TYPING EFFECT

const text =
"You are my favorite person in the entire world ❤️";

let i = 0;

function typing(){

  if(i < text.length){

    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(typing,70);
  }
}

typing();

// LOVE LETTERS

function openLetter(type){

  document.getElementById("letterModal").style.display = "flex";

  let content = "";

  if(type === "sad"){

    content =
    "Whenever you're sad, remember that I'll always be here for you ❤️";

  }

  if(type === "happy"){

    content =
    "Seeing you happy is my favorite thing in the world ✨";

  }

  if(type === "miss"){

    content =
    "Distance means nothing because my heart is always with you 💖";

  }

  document.getElementById("letterText").innerHTML = content;
}

function closeLetter(){

  document.getElementById("letterModal").style.display = "none";
}

function showMessage(type){

  const popup =
  document.getElementById("popup");

  const title =
  document.getElementById("popup-title");

  const message =
  document.getElementById("popup-message");

  popup.style.display = "flex";

  if(type === "love"){

    title.innerHTML =
    "My Love For You ❤️";

    message.innerHTML =
    "Sayang, kalau ada satu perkara terbaik yang pernah terjadi dalam hidup I, the thing is you. Sejak you hadir dalam hidup I, banyak benda berubah jadi lebih indah. You bukan je dah jadi someone yang I cinta, tapi you juga adalah tempat I bertenang, tempat I meluah rasa, dan sebab kenapa I mampu tersenyum walaupun pada hari yang paling penat. I tak pernah sangka ada seseorang yang boleh buat I rasa begitu dihargai dan disayangi hanya dengan kehadiran dia. I suka everything about you, daripada cara you bercakap, cara you ketawa, cara you ambil berat tentang I, sampailah kepada small things yang mungkin you sendiri tak sedar. Semua itu buat I jatuh cinta dekat you setiap hari tanpa fail. Kadang-kadang I pandang you and I masih tak percaya I sebertuah ni dapat memiliki someone seperti you dalam hidup I.Thank you sayang sebab sentiasa ada dengan I walaupun I bukan manusia yang sempurna. You tetap memilih untuk stay, memahami I, and menerima kekurangan I. Itu yang buat I semakin yakin bahawa cinta I dekat you bukan sekadar sementara, tetapi sesuatu yang benar-benar ikhlas dari hati I. I nak you tahu yang cinta I dekat you sangat sangat banyak sayang. I akan sentiasa cuba bahagiakan you, jaga hati you, and menjadi yang terbaik untuk you. Selagi I masih bernyawa, I akan terus sayang you dengan sepenuh hati I. Happy Birthday Sayangkuu" ;

  }

  if(type === "future"){

    title.innerHTML =
    "Our Future Together ✨";

    message.innerHTML =
    "Thank you, sayang… thank you sebab hadir dalam hidup I and membawa begitu banyak kebahagiaan yang I sendiri susah nak gambarkan dengan kata-kata. Terima kasih sebab sentiasa sabar melayan perangai I, memahami emosi I, and tetap bersama I walaupun ada masa I susah untuk difahami. I benar-benar hargai setiap usaha you untuk hubungan kita. I tahu bukan mudah untuk always bertahan and terus mencintai someone setiap hari, tapi you still lakukan itu untuk I. Thank you sebab selalu cuba menggembirakan I walaupun you sendiri mungkin tengah penat atau ada masalah. Perkara kecil yang you buat pun cukup untuk buat hati I rasa sangat dihargai. Thank you kerana menjadi tempat I bercerita, tempat I mencari ketenangan, and tempat I rasa paling selesa menjadi diri sendiri. Dengan you, I rasa diterima sepenuhnya. You buat hidup I rasa lebih bermakna and lebih indah daripada sebelumnya. I cuma harap you tahu yang I sangat bersyukur sebab memiliki you dalam hidup I. I mungkin tak sempurna dalam menunjukkan rasa cinta I setiap masa, tapi percayalah, I benar-benar sayang dan hargai you lebih daripada apa yang mampu I ungkapkan dengan kata-kata. Happy Birthday Sayangkuu❤️";

  }

  if(type === "thanks"){

    title.innerHTML =
    "Thank You ❤️";

    message.innerHTML =
    "Thank you, sayang… thank you sebab hadir dalam hidup I and membawa begitu banyak kebahagiaan yang I sendiri susah nak gambarkan dengan kata-kata. Terima kasih sebab sentiasa sabar melayan perangai I, memahami emosi I, and tetap bersama I walaupun ada masa I susah untuk difahami. I benar-benar hargai setiap usaha you untuk hubungan kita. I tahu bukan mudah untuk always bertahan and terus mencintai someone setiap hari, tapi you still lakukan itu untuk I. Thank you sebab selalu cuba menggembirakan I walaupun you sendiri mungkin tengah penat atau ada masalah. Perkara kecil yang you buat pun cukup untuk buat hati I rasa sangat dihargai. Thank you kerana menjadi tempat I bercerita, tempat I mencari ketenangan, and tempat I rasa paling selesa menjadi diri sendiri. Dengan you, I rasa diterima sepenuhnya. You buat hidup I rasa lebih bermakna and lebih indah daripada sebelumnya. I cuma harap you tahu yang I sangat bersyukur sebab memiliki you dalam hidup I. I mungkin tak sempurna dalam menunjukkan rasa cinta I setiap masa, tapi percayalah, I benar-benar sayang dan hargai you lebih daripada apa yang mampu I ungkapkan dengan kata-kata. Happy Birthday Sayangkuu";

  }

}

function closePopup(){

  document.getElementById("popup").style.display =
  "none";

}