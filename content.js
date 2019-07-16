console.log("let the filling begin...");

// let hedline = window.document.getElementsByClassName("post-headline");
// for(hed of hedline){
// 	hed.innerHTML = "kissu korar nai";
// }



let educational_background = window.document.getElementById("finaid-educationalBackground").options;
educational_background[3].selected = true;


let annual_income = window.document.getElementById("finaid-income");
annual_income.value = "0";

let employment_status = window.document.getElementById("finaid-employmentStatus").options;
employment_status[4].selected = true;

let amount_to_pay = window.document.getElementById("finaid-amount-can-pay");
amount_to_pay.value = "0";


// get the course name 
let course_title = window.document.getElementsByClassName("course-info")[0].getElementsByTagName("h1")[0].innerHTML;
console.log(course_title);

let real_aid_reason = "Since I am a student and I have absolutely no income, I cant afford to pay here in Coursera.\
	But I have a very strong urge to learn about "+course_title+" and I need it very much.\
	I am currently studying at Shahjalal University of Science and Technology, Sylhet, which is in Bangladesh.\
	I am studying in Computer Science and Engineering here. But I strongly want to learn about "+course_title+", I \
	want to know about "+course_title+" a bit more. Here in this university, we dont have such program available. And so \
	pursuing my passion strongly needs online resources. And as I cant pay, I have to apply for a financial aid. \              \
    																												\
	In short, I want to get a good understanding of "+course_title+" and I think coursera is great at this. But I \
	am a student and I dont have that money to pay for my enrolment here. Therefore I desperately want a financial \
	aid here in coursera."


let aid_reason = window.document.getElementById("finaid-reason");
aid_reason.value = real_aid_reason;


let real_aid_goal = "This course will be helpful for my future career, i guess. But not only for my career or any \
type of financial beneficiary initive, rather for my soul searching and quenching my ever present thirst for\
 "+course_title+". I want to work with every sectors of my interest there is present in this holy world of God \
 and with a good knowledge of satisfaction i know i can do better in future.\
\
I am studying in Computer Science and Engineering in Shahjalal University of Science and Technology, Sylhet \
which is in Bangladesh. And I strongly want to learn about "+course_title+". Here in this university, we dont have\
 such program available. And so pursuing my passion strongly needs online resources. I hope with the help of\
  coursera I can pursue the interest i have which in the long run will be helpful to my career. I hope this \
  course will guide me through the rough path of life well.\
I intend to be good at "+course_title+" and I think taking this course will help me a lot and let my hunger be checked."




let aid_goal = window.document.getElementById("finaid-goal");
aid_goal.value = real_aid_goal;




let loan_reason = window.document.getElementById("finaid-loanReason");
loan_reason.value = "I have no money.";


// let tracker = window.document.getElementById("submit_application_button");
// tracker.data-track = false;







