const projects = [
    {
        id: 1,
        title: "勤怠管理Webアプリケーション",
        subtitle: "Java & Spring boot",
        description: "説明",
        images: ["/img/works_img/kintai/1.png", "/img/works_img/kintai/2.png","/img/works_img/kintai/3.png","/img/works_img/kintai/4.png","/img/works_img/kintai/5.png"]
    },
    {
        id: 2,
        title: "タスク管理Webアプリケーション",
        subtitle: "Java & Spring boot",
        description: "説明",
        images: ["/img/works_img/taskManage/1.png","/img/works_img/taskManage/2.png","/img/works_img/taskManage/3.png"]
    },
    {
        id: 3,
        title: "カレッジ運営Webアプリケーション",
        subtitle: "PHP",
        description: "説明",
        images: ["/img/works_img/management/reserve.png", "/img/works_img/management/login.png", "/img/works_img/management/room.png","/img/works_img/management/schedule.png","/img/works_img/management/logout.png"]
    },
    {
        id: 4,
        title: "CASLⅡシミュレータ",
        subtitle: "C",
        description: "説明",
        images: ["/img/works_img/COMET2_simulator/1.png", "/img/works_img/COMET2_simulator/2.png"]
    },
    {
        id: 5,
        title: "シフト自動作成システム",
        subtitle: "GAS",
        description: "説明",
        images: ["/img/works_img/shifts/port1.png", "/img/works_img/shifts/port2.png", "/img/works_img/shifts/2-2.png"]
    },
    {
        id: 6,
        title: "勤怠管理・給与計算システム",
        subtitle: "Excel VBA",
        description: "説明",
        images: ["/img/works_img/vba/2.png", "/img/works_img/vba/1.png"]
    },
    {
        id: 7,
        title: "時間割自動作成システム",
        subtitle: "Excel VBA",
        description: "説明",
        images: ["/img/works_img/vba2/1.png", "/img/works_img/vba2/2.png", "/img/works_img/vba2/3.png","/img/works_img/vba2/4.png"]
    },
    {
        id: 8,
        title: "自動検温記録システム",
        subtitle: "GAS",
        description: "説明",
        images: ["/img/works_img/slackbot2/action.png", "/img/works_img/slackbot2/cmd.png", "/img/works_img/slackbot2/ret.png"]
    },
    {
        id: 9,
        title: "ECサイト",
        subtitle: "PHP",
        description: "説明",
        images: ["/img/works_img/ecsite/1.png", "/img/works_img/ecsite/2.png", "/img/works_img/ecsite/3.png"]
    },
    {
        id: 10,
        title: "自動気温湿度記録センサーロボット",
        subtitle: "Java & Python & Raspberry Pi",
        description: "説明",
        images: ["/img/works_img/sensor_robot/1.png", "/img/works_img/sensor_robot/2.png", "/img/works_img/sensor_robot/3.png","/img/works_img/sensor_robot/4.png"]
    }
    
];


function loadProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        const projectDetailsContainer = document.getElementById('projectDetails');

        // カルーセルのスライド
        let carouselIndicators = '';
        let carouselInner = '';
        project.images.forEach((image, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselInner += `
                <div class="carousel-item ${activeClass}">
                    <img src="${image}" class="d-block w-100" alt="Project Slide ${index + 1}">
                </div>`;
        });

        project.images.forEach((_, index) => {
            const activeClass = index === 0 ? 'active' : '';
            carouselIndicators += `<li data-bs-target="#projectCarousel" data-bs-slide-to="${index}" class="${activeClass}"></li>`;
        });


        // カルーセルのHTML
        const carouselHtml = `
            <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">${carouselIndicators}</ol>
                <div class="carousel-inner">${carouselInner}</div>
                <a class="carousel-control-prev" href="#projectCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#projectCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>`;

        // プロジェクトのタイトルと説明を追加
        const projectInfoHtml = `
            <h2>${project.title}</h2>
            <h5>${project.subtitle}</h5>
            <p>${project.description}</p>`;

        // HTMLをコンテナに挿入
        projectDetailsContainer.innerHTML = `
            <div class="row">
                <div class="col-md-6">${carouselHtml}</div>
                <div class="col-md-6">${projectInfoHtml}</div>
            </div>`;
    } else {
        // プロジェクトが見つからない場合
        document.getElementById('projectDetails').innerHTML = '<p>プロジェクトが見つかりません。</p>';
    }
}

// URLからプロジェクトIDを取得し、詳細を表示
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'), 10); // 10は数値の基数（10進数）
loadProjectDetails(projectId);