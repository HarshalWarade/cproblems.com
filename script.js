


let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content__last');
let icons = document.getElementsByClassName('icon__last');
for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0ff";
            // toggles[i].style.fontWeight = "700";
            toggles.style.boxshadow = "box-shadow: 0 0 5px red;";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else {
            contentDiv[i].style.height = "0px";
            // toggles[i].style.color = "#fff";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                // toggles[j].style.color = "#ffffff";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
};





let firstQuestion = document.getElementById('firstQuestion');
firstQuestion.innerText = `#include <stdio.h>
int main()
{
    printf("Hello World!");
    return 0;
}`;

let secondQuestion = document.getElementById('secondQuestion');
secondQuestion.innerText = `#include <stdio.h>
int main()
{
    int x;
    printf("Enter any integer: ");
    scanf("%d", &x);
    printf("The returned value is: %d", 12 * x);
    return 0;
}`;

let thirdQuestion = document.getElementById('thirdQuestion');
thirdQuestion.innerText = `#include <stdio.h>
int main()
{
    int age;
    int pass;
    printf("Please enter your age: ");
    scanf("%d", &age);
    printf("Do you have a pass?");
    scanf("%d", &pass);
    if (age >= 18 && pass == 0)
    {
        printf("Welcome to the party!");
    }
    else
    {
        printf("You are not allowed to the party!");
    }
    return 0;
}`;

let fourthQuestion = document.getElementById('fourthQuestion');
fourthQuestion.innerText = `#include <stdio.h>
int main()
{
    float chemistry, physics, maths;
    printf("Enter Chemistry's total marks out of 100: ");
    scanf("%f", &chemistry);
    printf("Enter Physics's total marks out of 100: ");
    scanf("%f", &physics);
    printf("Enter Maths's total marks out of 100: ");
    scanf("%f", &maths);
    if (chemistry < 30 || physics < 30 || maths < 30)
    {
        printf("FAILED!");
    }
    else
    {
        printf("Congratulations, you passed!");
    }
    return 0;
}`;

let fifthQuestion = document.getElementById('fifthQuestion');
fifthQuestion.innerText = `#include <stdio.h>
int main()
{
    float radius;
    float pi = 3.14;
    printf("Enter the radius of the circle: ");
    scanf("%f", &radius);
    printf("The area of the circle is: %f", pi * radius * radius);
    return 0;
}`;

let sixthQuestion = document.getElementById('sixthQuestion');
sixthQuestion.innerText = `#include <stdio.h>
int main()
{
    int JavaScript, Python, C;
    printf("Can you code in Javascript? If yes, type 0 otherwise 1. ");
    scanf("%d", &JavaScript);
    printf("Can you code in Python? If yes, type 0 otherwise 1. ");
    scanf("%d", &Python);
    printf("Can you code in C? If yes, type 0 otherwise 1. ");
    scanf("%d", &C);
    if ((JavaScript == 0 && Python == 0) || (C == 0))
    {
        printf("Welcome to the amazing world of coding!");
    }
    else
    {
        printf("You can't enter the room.");
    }
    return 0;
}`;