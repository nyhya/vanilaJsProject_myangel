var bindDataObj = {
    // 보험 리스트
    insureanceList: [],
    insuranceInfo: {                           // 보험 관련 정보
        pcaymd: "",                            // 보험 관련 정보 - 상령일
        analysisDate: "",                      // 보험 관련 정보 - 분석일
        insuranceNum: "",                      // 보험 관련 정보 - 가입한 보험 개수
        monthPay: "",                          // 보험 관련 정보 - 월 보험료 전체 계산
        checkStandardReadyDataList: {          // 보험 관련 정보 - 표준금액 대비 보장 준비 금액
            originData: [],                    // 보험 관련 정보 - 표준금액 대비 보장 준비 금액 - 서버에서 주는 원본 정보
            standardList: [],                  // 보험 관련 정보 - 표준금액 대비 보장 준비 금액 - 표준금액 리스트
            readyList: [],                     // 보험 관련 정보 - 표준금액 대비 보장 준비 금액 - 준비금액 리스트
            stateList: [],                     // 보험 관련 정보 - 표준금액 대비 보장 준비 금액 - 준비상태 리스트
            percentgeList: [],                  // 보험 관련 정보 - 전체현황 - 보장,진단,수술,입원,실손 평균
            graphData: []

        }
    },
    userInfo: {                                // 고객 정보
        userName: "",                          // 고객 정보 - 이름
        userAge: ""                            // 고객 정보 - 나이
    },
    consultantInfo: {                          // 컨설턴트 정보
        consultantName: "",                    // 컨설턴트 정보 - 이름
        consultantPhone: "",                   // 컨설턴트 정보 - 연락처
        consultantTopGroup: "",                // 컨설턴트 정보 - 상위 소속
        consultantGroup: "",                   // 컨설턴트 정보 - 소속
        standardDate: "",                      // 컨설턴트 정보 - 분석일
        mdrtYn: "N",                           // 컨설턴트 정보 - 자격증 - mdrt
        supAuthPlarYn: "N"                     // 컨설턴트 정보 - 자격증 - 우수 보험사
    },
    sectionDataList: [],                        // 섹션6 ~ 섹션9까지 화면에 필요한 정보
    graphSectionPercente: [],                   // 전체현황 - 바 그래프 값
    ageComparareGuarantee: [],                  // 표준금액 대비 연령대별 보장금액 - 원본 (서버에서 받아온 정보)
    ageGuaranteeInsurance: []                   // 표준금액 대비 연령대별 보장금액 - 표현을 위해 가공된 정보
}

/**
 * numberWithCommas
 * @description 콤마로 변형 하는 함수
 * @param {*} x {변형하고 싶은 값}
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * dateChange
 *  @description 날짜 포멧 변형 하는 함수
 *  @param {*} x { date 포멧변경 }
 */
function dateChange(x) {
    return x.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
}

/**
 * setUiLicense
 * @description 보험사 자격증 아이콘 세팅
 */
function setUiLicense() {
    // 자격증 mdrtYn 값이 Y일 경우 아이콘 화면에 표시
    if (bindDataObj.consultantInfo.mdrtYn == "Y") {
        document.querySelector('#sym').classList.add("mdrt");
    }

    // 우수 보험사 supAuthPlarYn 값이 Y일 경우 아이콘 화면에 표시
    if (bindDataObj.consultantInfo.supAuthPlarYn == "Y") {
        document.querySelector('#sym2').classList.add("superb");
    }
}

/**
 * setUiMakeGuarantee
 * @description 보장 준비 현황 - 표준금액 대비 보장 준비 금액
 */
function setUiMakeGuarantee() {
    //보장액 전체 배열
    var guarantee = bindDataObj.insuranceInfo.checkStandardReadyDataList.originData
    //표준금액 배열찾기
    var allGuarantee = guarantee.filter((arrayItem) => { return arrayItem.stdAmtTypNam == "필요 보장"; });
    //준비금액 배열찾기
    var needGuarantee = guarantee.filter((arrayItem) => { return arrayItem.stdAmtTypNam == "총보장액"; });

    //표준금액
    bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList = [];
    if (allGuarantee.length && allGuarantee.length > 0) {
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt0);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt1);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt2);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt3);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt4);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt5);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt6);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt7);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt8);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt9);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt10);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt11);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt12);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt13);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt14);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt15);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt16);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt17);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.push(allGuarantee[0].gnAmt18);
    }

    //준비금액
    bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList = [];
    if (needGuarantee.length && needGuarantee.length > 0) {
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt0);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt1);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt2);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt3);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt4);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt5);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt6);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt7);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt8);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt9);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt10);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt11);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt12);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt13);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt14);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt15);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt16);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt17);
        bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.push(needGuarantee[0].gnAmt18);
    }

    if (bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.length == bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList.length) {
        bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList.forEach((data, idx) => {
            var percentge = (bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList[idx] / data) * 100;

            percentge = isNaN(percentge) ? 0 : percentge

            var state = ""
            if (percentge <= 40) {
                state = "red"
            } else if (percentge > 40 && percentge <= 70) {
                state = "yellow"
            } else if (percentge > 70) {
                state = "green"
                percentge = 100;
            } else {
                state = "red"
            }
            // console.log("[", idx, "]", bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList[idx], data, percentge, state);
            bindDataObj.insuranceInfo.checkStandardReadyDataList.stateList[idx] = state;
            bindDataObj.insuranceInfo.checkStandardReadyDataList.percentgeList[idx] = percentge;
        });
    }

    // 표준금액 대비 보장 준비 테이블 ROW
    var guaranteeTableRow = document.querySelectorAll("#guaranteeTable tr")
    bindDataObj.insuranceInfo.checkStandardReadyDataList.stateList.forEach((data, idx) => {
        var data = bindDataObj.insuranceInfo.checkStandardReadyDataList;
        // 보장 준비 현황 - 표준금액 데이타 맵핑
        guaranteeTableRow[idx + 1].children[1].innerHTML = data.standardList[idx];
        // 보장 준비 현황 - 준비금액 데이타 맵핑
        guaranteeTableRow[idx + 1].children[2].innerHTML = data.readyList[idx];
        // 보장 준비 현황 - 준비상태 데이타 맵핑
        guaranteeTableRow[idx + 1].children[3].classList.add(data.stateList[idx]);
    });
}

/**
 * onClickActionToggle
 * @description 보험의 보장 금액 리스트 보여주기
 * @param {*} obj 
 */
function onClickActionToggle(obj) {
    if ($(obj).hasClass('on')) {
        $(obj).siblings('.prodectName').removeClass('on');
        $(obj).siblings('.insurenceList').removeClass('on');
        $(obj).removeClass('on')
    } else {
        $(obj).siblings('.prodectName').addClass('on');
        $(obj).siblings('.insurenceList').addClass('on');
        $(obj).addClass('on');
    }
}

/**
 * setUiSection06to09Data
 * @description 보험가입내역 리스트 
 */
function setUiSection06to09Data() {
    var rowList = document.querySelectorAll(".sec06 .roundBox, .sec07 .roundBox, .sec08 .roundBox, .sec09 .roundBox")
    bindDataObj.sectionDataList.forEach((data, idx) => {
        var text = "";
        var textColor = "";
        if (data.state == "green") {
            text = "충분"
            textColor = "green"
        } else if (data.state == "yellow") {
            text = "부족"
            textColor = "yellow"
        } else {
            text = "위험"
            textColor = "red"
        }

        rowList[idx].children[0].classList.add(data.state);
        rowList[idx].children[1].children[1].innerHTML = text;
        rowList[idx].children[1].children[1].classList.add(textColor);
        rowList[idx].children[2].innerHTML = numberWithCommas(data.ready) + "<span> 만원</span>";

    })

}

/**
 * getUiInsuranceListHtml
 * @description 보험 상세 내역 리스트 뿌리기
 */
function getUiInsuranceListHtml() {
    var strInsurance = "";
    bindDataObj.insureanceList.forEach(data => {
        strInsurance += '<div class="tabInfo">';
        strInsurance += '   <span class="companyName">' + data.assoAsucoInucdNam + '</span>';
        strInsurance += '   <div class="prodectName">' + data.insPrdnm + '</div>';
        strInsurance += '   <!-- dateInfo : s -->';
        strInsurance += '   <div class="dateInfo">';
        strInsurance += '       <div class="dateCon">';
        strInsurance += '           <div class="title">계약일자</div>';
        strInsurance += '           <div class="date filterDate">' + data.ctrStrtYmd + '</div>';
        strInsurance += '       </div>';
        strInsurance += '       <div class="dateCon">';
        strInsurance += '           <div class="title">만기일자</div>';
        strInsurance += '           <div class="date filterDate">' + data.ctrEnYmd + '</div>';
        strInsurance += '       </div>';
        strInsurance += '       <div class="dateCon">';
        strInsurance += '           <div class="title">월 보험료</div>';
        strInsurance += '           <div class="date"><span class="filterComma">' + data.pymPrem + '</span> 원</div>';
        strInsurance += '       </div>';
        strInsurance += '   </div>';
        strInsurance += '   <div class="insurenceList">';
        /* 2021-01-08 추가 : s */
        strInsurance += '   <div class="titleArea"><div class="tit">특약명</div><div class="payment">가입금액</div></div>'
        /* 2021-01-08 추가 : e */
        data.trtNamList.forEach((item, itemIdx) => {
            strInsurance += '       <div class="item"><div class="title">' + item + '</div><div class="price">' + numberWithCommas(data.trtAmtList[itemIdx]) + ' 만원</div></div>';
        })

        strInsurance += '   </div>';
        strInsurance += '   <div class="toggleBtn" onClick="onClickActionToggle(this)">특약</div>';
        strInsurance += '</div>';
    })
    return strInsurance;
}

/**
 * setDrawBargraph
 * @description 바그래프 그리기
 */
function setDrawBargraph() {
    var passAwayGuarantee = 0;
    var diagnosisGuarantee = 0;
    var surgeryGuarantee = 0;
    var hospitalizationGuarantee = 0;
    var damageGuarantee = 0;

    bindDataObj.insuranceInfo.checkStandardReadyDataList.percentgeList.forEach((data, idx) => {

        if (idx >= 0 && idx < 2) {
            passAwayGuarantee += data;
        } else if (idx >= 2 && idx < 9) {
            diagnosisGuarantee += data;
        } else if (idx >= 9 && idx < 13) {
            surgeryGuarantee += data;
        } else if (idx >= 13 && idx < 17) {
            hospitalizationGuarantee += data;
        } else if (idx >= 17 && idx < 19) {
            damageGuarantee += data;
        }
    });

    bindDataObj.graphSectionPercente.push(Math.max(passAwayGuarantee / 2, 10));
    bindDataObj.graphSectionPercente.push(Math.max(diagnosisGuarantee / 7, 10));
    bindDataObj.graphSectionPercente.push(Math.max(surgeryGuarantee / 4, 10));
    bindDataObj.graphSectionPercente.push(Math.max(hospitalizationGuarantee / 4, 10));
    bindDataObj.graphSectionPercente.push(Math.max(damageGuarantee / 2, 10));

    bindDataObj.graphSectionPercente.forEach((data, idx) => {

        var state = "";

        if (data <= 40) {
            state = "red"
        } else if (data > 40 && data <= 70) {
            state = "yellow"
        } else if (data > 70) {
            state = "green"

        }

        document.querySelector("#graph" + (idx + 1)).style.height = data + "%";
        document.querySelector('#graph' + (idx + 1)).children[0].classList.add(state);
        document.querySelector('#graph' + (idx + 1)).children[0].children[0].classList.add(state);

    });
}

/**
 * setDrawDoughnut
 * @description 도너츠 그래프 그리기
 */
function setDrawDoughnut() {

    var agent = navigator.userAgent.toLowerCase();
    var w = window.innerWidth - 40;
    var red = 0;
    var yellow = 0;
    var green = 0;

    if (w > 725) {
        w = 725
    }
    if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        console.log("익스플로러");
        w = window.innerWidth - 60;
    }
    var h = 225;
    // var graphData = []; // 그래프 테이타 값
    var colorData = ["#ff4606", "#ffb850", "#29c7cc"];


    bindDataObj.insuranceInfo.checkStandardReadyDataList.stateList.forEach(state => {

        if (state == "red") {
            red += 1;
        } else if (state == "yellow") {
            yellow += 1;
        } else if (state == "green") {
            green += 1;
        }
    });

    bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData.push(red);
    bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData.push(yellow);
    bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData.push(green);

    document.querySelector("#doughnut").children[0].children[0].innerHTML = red + "개";
    document.querySelector("#doughnut").children[1].children[0].innerHTML = yellow + "개";
    document.querySelector("#doughnut").children[2].children[0].innerHTML = green + "개";

    var pie = d3.pie();
    var arc = d3.arc().innerRadius(30).outerRadius(80);
    var svg = d3.select(".one-graph")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("id", "graphWrap");

    var g = svg.selectAll(".pie")
        .data(pie(bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData))
        .enter()
        .append("g")
        .attr("class", "pie")
        .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

    g.append("path")
        .style("fill", function (d, i) {
            return colorData[i];
        })
        .transition()
        .duration(500)
        .delay(function (d, i) {
            return i * 500;
        })
        .attrTween("d", function (d, i) {
            var interpolate = d3.interpolate(
                { startAngle: d.startAngle, endAngle: d.startAngle },
                { startAngle: d.startAngle, endAngle: d.endAngle }
            );
            return function (t) {
                return arc(interpolate(t));
            }
        });

}

/**
 * setNoticeBox
 * @description 보장준비현황 > 위험,부족,충분 기준 표시
 */
function setNoticeBox() {
    document.getElementById("notice").children[0].innerHTML = "<em>0~40%</em>" + bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData[0] + "개";
    document.getElementById("notice").children[1].innerHTML = "<em>41~70%</em>" + bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData[1] + "개";
    document.getElementById("notice").children[2].innerHTML = "<em>71% 이상</em>" + bindDataObj.insuranceInfo.checkStandardReadyDataList.graphData[2] + "개";
}


/**
 * BgColorChange
 * @description 표준금액 대비 배경 색 변경하는 함수
 * @param {Number} Num { (납입금액 / 표준금액 ) * 100 = 퍼센트 계산 값 } 
 */
function BgColorChange(Num) {
    var bgColor = "";
    if (Num == 0) {
        bgColor = "gray";
    } else if (Num > 0 && Num <= 40) {
        bgColor = "lightBlue";
    } else if (Num >= 41 && Num <= 70) {
        bgColor = "skyBlue";
    } else if (Num >= 71) {
        bgColor = "navy";
    } else if (isNaN(Num)) {
        bgColor = "gray";
    }
    return bgColor;
}

/**
 * drawStr
 * @description 테이블 그리기
 * @param { for문 시작 숫자 } strart 
 * @param { for문 끝 숫자 } end 
 * @param { 나이 구분 110이상 끈기 } arrLen 
 */
function drawStr(strart, end, arrLen) {
    var str = "";
    str = "<tr>";
    str += "<td><div class='lineRight'>구분</div></td>";
    for (var i = 0; i <= arrLen; i++) {
        var age = bindDataObj.ageGuaranteeInsurance[0].age[i];
        age = age == 110 ? "종신" : age + "세";

        if (i != arrLen) {
            str += "<td><div class='lineRight'>" + age + "</div></td>";
        }
        else {
            str += "<td><div>" + age + "</div></td>";
        }
    }
    str += "</tr>";
    for (var i = strart; i < end; i++) {
        str += '<tr>';
        str += '<td>' + bindDataObj.ageGuaranteeInsurance[i].guaranteeTit + '</td>';
        for (var k = 0; k <= arrLen; k++) {
            var bgColorAdd = (bindDataObj.ageGuaranteeInsurance[i].Payment[k] / bindDataObj.insuranceInfo.checkStandardReadyDataList.standardList[i]) * 100;
            var col = BgColorChange(bgColorAdd);
            payment = numberWithCommas(bindDataObj.ageGuaranteeInsurance[i].Payment[k]);
            str += '<td class=' + col + '> ' + payment + '</td > ';
        }
        str += '</tr>';
    }
    return str;
}

/**
 * guaranteeTable
 * @description 표준금액대비 연령대별 보장금액 데이터 정리
 */
function guaranteeTable() {

    var guaranteeList =
        [
            "일반사망",
            "재해사망",
            "일반암",
            "소액암",
            "뇌출혈",
            "뇌혈관질환",
            "급성심근경색",
            "허혈심장질환",
            "LTC<br>(중증치매)",
            "최소수술<br>(1종)",
            "최대수술<br>(5종)",
            "질병수술(표시안함)",
            "재해수술(표시안함)",
            "질병입원비<br>(1일이상)",
            "재해입원비<br>(1일이상)",
            "질병입원비<br>(4일이상)",
            "재해입원비<br>(4일이상)",
            "질병입원<br>의료비",
            "상해입원<br>의료비"
        ]

    //보장명당 보장 연령대 데이터 세팅
    bindDataObj.ageGuaranteeInsurance = [];
    bindDataObj.ageComparareGuarantee.forEach((item, idx) => {
        // 질병수술 및 재해수술은 표시 안함.
        if (idx != Number(11) && idx != Number(12)) {
            var guaranteeTit = guaranteeList[String(idx)];
            bindDataObj.ageGuaranteeInsurance.push({
                guaranteeTit,
                age: [item.idc1Age, item.idc2Age, item.idc3Age, item.idc4Age, item.idc5Age],
                Payment: [item.gn1Amt, item.gn2Amt, item.gn3Amt, item.gn4Amt, item.gn5Amt]
            });
        }
    });

    var target = [
        { id: '#deadGuarantee', start: 0, end: 2 },
        { id: '#diagnosisGuarantee', start: 2, end: 9 },
        { id: '#surgeryGuarantee', start: 9, end: 11 },
        { id: '#admissionGuarantee', start: 11, end: 15 },
        { id: '#lossGuarantee', start: 15, end: 17 }
    ];

    target.forEach((targetData, targetIdx) => {
        var deadRowList = document.querySelectorAll(".sec10 " + targetData.id);
        var arrLength = bindDataObj.ageGuaranteeInsurance[0].age.indexOf(110);

        var str = drawStr(targetData.start, targetData.end, arrLength);

        deadRowList[0].innerHTML = str;
    })
}

/**
 * GET 파라미터 가져오는 함수
 */
function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}

$(document).ready(function () {
    var getParam = getUrlParams();
    if (typeof getParam.jPath != "string") {
        alert("json 경로를 받아올 수 없습니다.")
    }

    var jsonURL = decodeURIComponent(getParam.jPath)
    console.log(jsonURL);

    $.ajax({
        url: "./data/data.json",
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=euc-kr',
        type: 'GET',
        cache: false,
        headers: { 'Pragma': 'no-cache' },
        success: function (data) {
            var groupList = _.groupBy(data.kcisCtrInfList.kcisCtrInf, data => "key_".concat(data.rcvAsplyno))


            bindDataObj.userInfo.userName = data.csNam;
            bindDataObj.userInfo.userAge = data.age;
            bindDataObj.consultantInfo.consultantName = data.fcInf.fcEmplNam;
            bindDataObj.consultantInfo.consultantPhone = data.fcInf.plarHphnNum;
            bindDataObj.consultantInfo.consultantHighGroup = data.fcInf.ofcNam;
            bindDataObj.consultantInfo.consultantGroup = data.fcInf.suposOfcNam;
            bindDataObj.consultantInfo.standardDate = data.fcInf.isymd;
            bindDataObj.consultantInfo.mdrtYn = data.fcInf.mdrtYn;
            bindDataObj.consultantInfo.supAuthPlarYn = data.fcInf.supAuthPlarYn;
            bindDataObj.ageComparareGuarantee = data.kcisGnAgeAmtList.kcisGnAgeAmtDto;


            bindDataObj.insureanceList = _.reduce(groupList, (result, data, idx) => {
                console.log(groupList);
                var info = {
                    assoAsucoInucd: data[0].assoAsucoInucd,
                    assoAsucoInucdNam: data[0].assoAsucoInucdNam,
                    ctrEnYmd: data[0].ctrEnYmd,
                    ctrStrtYmd: data[0].ctrStrtYmd,
                    insPrdnm: data[0].insPrdnm,
                    pymPrem: data[0].pymPrem,

                    trtAmtList: [],
                    trtNamList: []
                }
                data.forEach(v => {
                    info.trtAmtList.push(Math.floor(v.trtAmt))
                    info.trtNamList.push(v.trtNam)
                })
                result.push(info)
                return result;
            }, [])
            bindDataObj.insuranceInfo.pcaymd = data.pcaymd;
            bindDataObj.insuranceInfo.analysisDate = data.fcInf.isymd;
            bindDataObj.insuranceInfo.insuranceNum = bindDataObj.insureanceList.length;
            bindDataObj.insuranceInfo.monthPay = bindDataObj.insureanceList.reduce((result, data) => {
                result = parseInt(result) + parseInt(data.pymPrem);
                return parseInt(result)
            }, 0);

            bindDataObj.insuranceInfo.checkStandardReadyDataList.originData = data.spcvStdAmtDtlCttList.spcvStdAmtDtlCtt;

            setUiLicense();
            setUiMakeGuarantee();

            var sectionDataIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
            sectionDataIdx.forEach(idx => {
                bindDataObj.sectionDataList.push({
                    state: bindDataObj.insuranceInfo.checkStandardReadyDataList.stateList[idx],
                    ready: bindDataObj.insuranceInfo.checkStandardReadyDataList.readyList[idx]
                })
            });

            setUiSection06to09Data();
            setDrawBargraph();
            setDrawDoughnut();
            setNoticeBox();

            guaranteeTable();


        },//success
        complete: function (data) {
            //화면에 맵핑하기
            document.getElementById("monthPay").innerHTML = bindDataObj.insuranceInfo.monthPay;
            document.getElementById("monthPay2").innerHTML = bindDataObj.insuranceInfo.monthPay + "원";
            document.getElementById("analysisDate").innerHTML = bindDataObj.insuranceInfo.analysisDate;
            document.getElementById("pcaymd").innerHTML = bindDataObj.insuranceInfo.pcaymd;
            document.getElementById("insuranceNum").innerHTML = bindDataObj.insuranceInfo.insuranceNum;
            // document.getElementById("insuranceNum2").innerHTML = bindDataObj.insuranceInfo.insuranceNum + "<span class='em'> 건</span>";
            document.getElementById("cusName").innerHTML = bindDataObj.userInfo.userName + "&nbsp;";
            document.getElementById("cusName2").innerHTML = bindDataObj.userInfo.userName;
            document.getElementById("cusAge").innerHTML = bindDataObj.userInfo.userAge + "세";
            document.getElementById("cName").innerHTML = bindDataObj.consultantInfo.consultantName + "&nbsp;";
            document.getElementById("highGroup").innerHTML = bindDataObj.consultantInfo.consultantHighGroup;
            document.getElementById("cPhone").innerHTML = bindDataObj.consultantInfo.consultantPhone;
            document.getElementById("group").innerHTML = bindDataObj.consultantInfo.consultantGroup;
            document.getElementById("standardDates").innerHTML = bindDataObj.consultantInfo.standardDate;
            document.getElementById("insuranceList").innerHTML = getUiInsuranceListHtml();


            document.querySelectorAll(".filterDate").forEach(obj => {
                var text = obj.innerHTML;
                obj.innerHTML = dateChange(text);
            });

            document.querySelectorAll(".filterComma").forEach(obj => {
                var text = obj.innerHTML;
                obj.innerHTML = numberWithCommas(text);
            })
        },//complete
        error: function (xhr, status, error) {
            alert("error");

        }
    });
    //ajax

});
//ready
