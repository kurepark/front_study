// 1번문제
function changeCss(selector, attribute, value){
    var target = document.querySelector(selector).style;
    if(attribute === 'color'){
        return target.color = value;
    } else if(attribute === 'fontSize'){
        return target.fontSize = value;
    } else if(attribute === 'fontWeight'){
        return target.fontWeight = value;
    } else if(attribute === 'backgroundColor'){
        return target.backgroundColor = value;
    } else if(attribute === 'display'){
        return target.display = value;
    } else if(attribute === 'width'){
        return target.width = value;
    }
}//if문으로 무한분기...함수를 여러개 짠것과 다를 바가 없다.

//1번 풀이
css('test','color','yellow');
function css(id, key, value){
    getElementById(id).style[key] = value;
    //style.key = style[key] 같다.
}

//css 스타일의 종류가 많을텐데 if문으로 모두 분기를 만들어야 하는건지 ㅠㅠ
//다른 방법이 떠오르지 않아서 스타일별로 하나씩 if문으로 나눠주었습니다.
changeCss("#test",'color','red');
changeCss("#test",'fontSize','40px');
changeCss("#test",'fontWeight','bold');
changeCss("#test",'backgroundColor','blue');
changeCss("#test",'display','inline');
changeCss("#test",'width','30px');

//문제2
function sum(x){
	return function(y){
  	return x + y;
  }
}
sum(5)(10);
sum(20)(10);
sum(1)(4);

//2번문제 풀이
sum(5)(10);
//같다.
var f = sum(5);
f(10); //이것과 같다. 함수도 값으로 사용이 된다.값으로 반환되고 있다.
//console.log()는 내가 쓴 것이 잘 되었는지 확인하기 위해서.
var f1 = sum(25);
//f1이 실행되어야 값이 더해진다.

//문제3
function typeToKor(value){
	var valueChk = typeof(value);
  if(valueChk === 'number'){
  return '숫자';
  } else if(valueChk === 'string'){
  return '문자';
  } else if(valueChk === 'boolean'){
  return '참거짓';
  } else{
  return '객체';
  }
}

typeToKor(5);
typeToKor('ㅎㅎㅎㅎ');
typeToKor(true);
typeToKor({});

//3문제 풀이

//함수를 넣으면 함수가 반환되고 undefined를 넣으면 그것도 반환되어야한다. 보이는것만 다가 아니라
//또 다른 것을 넣을때 나오는 '식'을 만들어야한다.
//브라우저가 업데이트 되더라도 코드가 돌아가도록 해야한다. 반복되는 코드도 줄여야한다.
function typeToKor(type){
    var types = {//텍스트가 바뀐다면 여기서만 고쳐줘도 된다. 내가 짠 건 하나 고칠때 코드를 모두 뒤져서 수정해야함.
        number : '숫자',
        string : '문자',
        boolean : '참거짓',
        function : '함수',
        object : '객체',
        undefined : '없다'
    };
    //식으로 값을 정해야지 분기를 타서 값을 찾는것이 아니다.
    return types[typeof type];
}



function biggest(x,y,a,b){
    var arr = new Array(x, y, a, b);
    //배열에 이런식으로 인자를 직접 하나씩 넣는 방법밖에 없을까요? 
    var result = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(result < arr[i]){
            result = arr[i];
        }
    }
    return result;
}

biggest(4,5,2,1);
biggest(4,5,7,10);
biggest(44,15,27,11);
biggest(244,315,217,11);

//4번 문제풀이

//우선 두개만 비교해보자
function biggest(a,b){
    return a > b ? a : b;
}
biggest(1,2);

//4개를 비교한다면
function biggest(a,b,c,d){
    var max = a;
    if(max < b){
        max = b;
    }
    if(max < c){
        max =c;
    }
    if(max < d){
        max = d;
    }
    return max;//이렇게 쓴다면 로직이 계속 길어진다. 이럴때 사용하는게 반복문.
}
//반복문을 쓴다면
function biggest(a,b,c,d){
    var max = a;
    //반복문 시작
    if(max < b){
        max = b;
    }
    //반복문 제거
    return max;//반복문을 제거하더라도 그 안의 로직은 같아야한다.
}