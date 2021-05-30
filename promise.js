let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(console.log("error"))), 1000);
});

promise.then(
    result => console.log("complete..."),
    error => console.log("error...")
);

new Promise((resolve, reject ) => {
    setTimeout(() => {
        resolve(console.log("complete..."))
    }, 2000)
}).finally(() => console.log("준비완료..."))
.then(result => console.log(result));

new Promise((resolve, reject) => {
    throw new Error("error....");
}).finally(() => console.log("finish..."))
.catch(error => console.log("error 발생..."));

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => console.log("3초후 실행"));

function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("에러 발생!");
  });
}).catch(console.log("Dd"));

async function loadJson(url){
  let response =  await fetch(url);

  if(response.status = 200){
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
}

loadJson('Error').catch(console.log("d"));

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("GitHub username을 입력하세요.", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // 에러가 없으므로 반복문을 빠져나옵니다.
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // 얼럿 창이 뜬 이후에 반복문은 계속 돕니다.
        alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
      } else {
        // 알 수 없는 에러는 다시 던져집니다.
        throw err;
      }
    }
  }


  alert(`이름: ${user.name}.`);
  return user;
}

function f() {
  wait().then(result => alert(result));
}