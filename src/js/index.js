// step1 요구사항 구현을 위한 전략
// TODO 메뉴 추가
// - [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [x] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
// - [x] 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.


const $ = (selector) => document.querySelector(selector);

function App() {


    // form 태그가 자동으로 전송되는걸 막아준다.
    $('#espresso-menu-form').addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // 메뉴의 이름을 입력받는 건
    $("#espresso-menu-name")
        .addEventListener('keypress', (e) => {
            if (e.key === "Enter") {
                const espressoMenuName = $('#espresso-menu-name').value;
                const menuItemTemplate = (espressoMenuName) => {
                    return `<li className="menu-list-item d-flex items-center py-2">
                        <span className="w-100 pl-2 menu-name">${espressoMenuName}</span>
                        <button
                            type="button"
                            className="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                        >
                            수정
                        </button>
                        <button
                            type="button"
                            className="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                        >
                            삭제
                        </button>
                    </li>`
                };

                $('#espresso-menu-list')
                    .insertAdjacentHTML('beforeend', menuItemTemplate(espressoMenuName));

                const menuCount = $("#espresso-menu-name-list").querySelectorAll("li").length;
                $(".menu-count").innerText = `총 ${menuCount} 개`;

            };
        });

}

App();

// TODO 메뉴 수정
// - [x] 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴 수정하는 모달창(prompt)이 뜬다.
// - [x] 모달창에서 신규메뉴명을 입력 받고, 확인버튼을 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [x] 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컨펌(confirm) 모달창이 뜬다.
// - [x] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
