const url = "https://raw.githubusercontent.com/yude/koiutalyric/refs/heads/main/src/koi.txt";
let lines = "";

function getLyricRandom() {
  return lines[Math.floor(Math.random() * lines.length)]
}

window.addEventListener("DOMContentLoaded", () => {
    fetch(url)
      .then(r => r.text() )
      .then(str => {
          lines = str.split("\n");
      }
  );

  document.querySelector("#generate").onclick = () => {
      const resultLyric = getLyricRandom();
      document.querySelector("#result").innerText = resultLyric
  }
  document.querySelector("#tweet").onclick = () => {
    const result = document.querySelector("#result").innerText;
    if (result === "" || result === null || result === undefined) return alert("歌詞を生成してください♪")
    window.open(
        `https://twitter.com/intent/tweet?text=${result}` + encodeURI(`&url=https://iamtakagi.github.io/koiutalyric/`),
        "_blank",
        "noreferrer"
    )
}
})