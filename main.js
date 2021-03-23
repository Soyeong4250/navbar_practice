const toggleBtn = document.querySelector('.navbar_toggleBtn'); 
// toggleBtn이라는 변수에 navbar_togleBtn이라는 클래스를 할당
// html노드 중에 클래스가 navbar_togleBtn 이름을 가진 클래스를 찾아서 toggleBtn에 연결
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', ()=> {  // toggleBtn이 클릭될때마다 지정된 함수를 호출하는 이벤트 발생
    menu.classList.toggle('active');  // active 클래스 토글링
    icons.classList.toggle('active');
    // menu와 icons를 클릭했을때 active가 없다면 active를 추가해주고 있다면 해당 active룰 다시 제거

});