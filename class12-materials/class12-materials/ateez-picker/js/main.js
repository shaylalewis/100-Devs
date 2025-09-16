function playVideo(videoUrl) {
  const video = document.getElementById('video');
  video.innerHTML = `
    <iframe
      src="${videoUrl}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
  `;
}

document.getElementById('purple').onclick = function () {
  playVideo("https://www.youtube-nocookie.com/embed/nlnMDttgTbk?si=3Fc6RI-s07J_qoVZ?&amp;start=58&autoplay=1");
};

document.getElementById('green').onclick = function () {
  playVideo("https://www.youtube-nocookie.com/embed/CeIODBamkQ0?si=k_rTGsLis09mgZfF&amp;start=83&autoplay=1")
};

document.getElementById('blue').onclick = function () {
  playVideo("https://www.youtube-nocookie.com/embed/9t57C7NcjWo?si=36NKQMYvLlSQ9So-&amp;start=20&autoplay=1")
}

document.getElementById('orange').onclick = function () {
  playVideo("https://www.youtube-nocookie.com/embed/2HcVZm_4qAI?si=mrpoQt7ZMxofA9tl&amp;start=32&autoplay=1")
}


