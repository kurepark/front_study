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



