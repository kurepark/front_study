//(function(){})(); 즉시실행 함수 본문안으로 넣음
(function(){
    var response = {"c":"50","i":"https://itemimgs.pstatic.net/personacon","l":[
            {"m":"eunhye0406","n":"블루제이스","p":"/16/46/2354616.gif"},
            {"m":"radlohead","n":"크로스핏","p":"N"},
            {"m":"5hyemi5","n":"쏠려","p":"/96/63/2726396.gif"},
            {"m":"leecho87","n":"추리왕메추리","p":"/21/31/2703121.gif"},
            {"m":"kkokkoliko","n":"미역국밥","p":"/75/8/2920875.gif"},
            {"m":"lch2048","n":"창하오","p":"N"},
            {"m":"limjjing","n":"웹스터디","p":"N"},
            {"m":"ghgfhfg2","n":"DeSY","p":"/64/40/1114064.gif"},
            {"m":"mulder21c","n":"멀더끙","p":"/54/43/1124354.gif"},
            {"m":"dark602","n":"긴자손","p":"/2/94/959402.gif"},
            {"m":"kangjiiii02","n":"kangjiiii02","p":"N"},
            {"m":"dlwo12345","n":"불줄","p":"N"},
            {"m":"panginma","n":"팽팽","p":"N"},
            {"m":"leh00821","n":"nikke","p":"/70/3/480370.gif"},
            {"m":"danmi2857","n":"ppungppu","p":"/39/83/2878339.gif"},
            {"m":"hdmswjd","n":"댈리양","p":"N"},
            {"m":"kd789","n":"pubho","p":"N"},
            {"m":"jun88429","n":"프록시","p":"N"},
            {"m":"qhdud1484","n":"플르네","p":"/11/39/1073911.gif"},
            {"m":"gygud98","n":"금괴","p":"/75/5/1480575.gif"},
            {"m":"25oo_","n":"이오오","p":"N"},
            {"m":"lastpoem","n":"무한열정","p":"/21/31/2703121.gif"},
            {"m":"hyesoo_kim06","n":"khyehye","p":"N"},
            {"m":"suhokim2","n":"김수호","p":"/71/3/480371.gif"},
            {"m":"kms13570","n":"열사사","p":"N"},
            {"m":"art-1st","n":"art1st","p":"N"},
            {"m":"tlrud0621","n":"tlrud0621","p":"N"},
            {"m":"hosuk054","n":"흠흠","p":"/25/33/1403325.gif"},
            {"m":"71rlafhrgus","n":"SuFlatina","p":"/71/43/1124371.gif"},
            {"m":"method_hyun","n":"곱게자랐더염","p":"/79/47/1074779.gif"},
            {"m":"jurip_","n":"하양튤립","p":"N"},
            {"m":"zzamtime","n":"싱싱고","p":"/68/10/2831068.gif"},
            {"m":"lsy8906","n":"퍼블리숑","p":"/19/49/1044919.gif"},
            {"m":"wish8953","n":"ㅠㅠ","p":"N"},
            {"m":"cooksang","n":"아젠타인","p":"N"},
            {"m":"godsarangi","n":"불꽃놀이","p":"/90/73/977390.gif"},
            {"m":"sf36","n":"만성피로","p":"/42/9/2980942.gif"},
            {"m":"naraorda","n":"Naraorda","p":"/21/31/2703121.gif"},
            {"m":"eunjee1504","n":"팅코코","p":"/66/15/1111566.gif"},
            {"m":"beatdance","n":"그란트","p":"/54/54/2365454.gif"},
            {"m":"klilil","n":"noony","p":"N"},
            {"m":"jcyoum912","n":"달리는말","p":"N"},
            {"m":"uouo33","n":"열공모드","p":"N"},
            {"m":"virlit","n":"103683","p":"N"},
            {"m":"kiyoesjh","n":"jhjhjh","p":"N"},
            {"m":"eomji_90","n":"eomji","p":"N"},
            {"m":"mycarton","n":"미켈러","p":"/75/8/2920875.gif"},
            {"m":"gg5803","n":"H퍼블리셔","p":"/87/93/959387.gif"},
            {"m":"opereun","n":"맥시멈붐붐","p":"/53/34/2553453.gif"},
            {"m":"holygod89","n":"생성자","p":"/54/34/2553454.gif"}
        ]};


    var totalCount = response.c;
    var imagePath = response.i;
    var members = response.l;

    var memberLiElement = function() {
        var randomNumber = Math.floor((Math.random() * totalCount));
        var newMembers = members.filter(function(v, i) {
            return i > randomNumber;
        });

        return {
            totalCount: newMembers.length,
            members: newMembers.map(function(v) {
                var src = v.p !== 'N' ? imagePath + v.p : '';
                var className = src ? '' : 'no-image';
                return '<li><span><img src="' + src + '" /></span><span class="' + className + '">' + v.n + '</span></li>';
            }).join('')
        };
    };

    function rootComponent(memberElement) {
        return {
            root: '<div>접속 멤버' + memberElement.totalCount + ' 명<ul>'
            + memberElement.members + '</ul></div>'
        };
    }
    function render(component, container) {
        container.innerHTML = component.root;
    }

    setInterval(function() {
        var memberElement = memberLiElement();
        render(rootComponent(memberElement), document.getElementById('app'))
    }, 1000);

//접속인원수 출력
}());




