const bid = document.querySelector("#bid");
const education = document.querySelector("#education");
const family = document.querySelector("#family");
const caste = document.querySelector("#caste");
const skills = document.querySelector("#skills");
const age = document.querySelector("#age");
const reputation=document.querySelector("#reputation");

calculate=()=>{
    const Groom=((price* familyValue() * educationValue()* reputationValue() * ageValue() + casteValue() + skillsValue() ));
    bid.value = "";
   education.value = "";
   family.value = "";
   caste.value = "";
   skills.value=" ";
   age.value="";
   reputation.value=" "
    if(Groom === "NaN"){
        GroomBid.textContent = "Groom $0 each";
      showGroomBid();
    }
    else{
      GroomBid.textContent = "Groom $" + groom + " each";
      showGroomBid();
    }
  }
  
  showGroomBid = () => {
    var x = document.querySelector("#Groom-bid");
    x.className = "show";

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

    