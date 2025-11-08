const allCharsArray = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  '0','1','2','3','4','5','6','7','8','9',
  '!','@','#','$','%','^','&','*','(',')','_','+','[',']','{','}','|',';',':',',','.','<','>','?','/','`','~','-','=','\\'
];
let passtext1 = document.getElementById("pswd1")
let passtext2 = document.getElementById("pswd2")
function generate()
{
  pswdText1 = ""
  pswdText2 = ""
  for(i=0; i<15; i++)
  {
    pswd1 = Math.floor(Math.random()*allCharsArray.length)
    finalPswd = allCharsArray[pswd1]
    pswdText1 += finalPswd
    pswd2 = Math.floor(Math.random()*allCharsArray.length)
    finalPswd2 = allCharsArray[pswd2]
    pswdText2 += finalPswd2
  }
  passtext1.innerText = pswdText1
  passtext2.innerText = pswdText2


  console.log(pswdText); // ✅ logs after the loop finishes
  return pswdText; 
}
generate()