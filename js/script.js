$(document).ready(function() {


  var data =  [
    {
            value: 30,
            color:"#F7464A"
        },

        {
            value : 120,
            color : "#4D5360"
        }
      ];


  $('.policy').load("/html/question/question.html", function() {
    $('.btn').click(function() {

      showLoader();
      $('.question-content').delay(3000).animate({"margin-left": "-100vw", "width": "800px"});
      $('.question-content').fadeOut();
      $('.chart-area').fadeIn(300, function() {
        $('#myChart').delay(4000).animate({
          "right": "0px"
        },  function() {

            createGraph();


        });
      });

    });

  });

  $('.profile').load("/html/profile/profile.html", function() {
    loadPolicyCard();
  });

});

function showLoader() {
  console.log("works");
  $('.load-overlay').fadeIn();
}
function hideEverything() {

  $('.other').fadeOut('2800');
  $('.author').fadeOut('2700');
  $('.about').fadeOut('2700');
  $('h1').addClass("animate");
}
function loadPolicyCard() {
  $('.policyCard').load("/html/policyCard/policycard.html", function() {});
}

function showPolicy() {

  $('.profile').addClass("hidden");
  $('.policy').removeClass("hidden");

}

function showProfile() {
  $('.policy').addClass("hidden");
  $('.profile').removeClass("hidden");
}

function showResults() {
  $('.policy-author').velocity({
      properties: { opacity: 0, "margin-left" : "-100vw" },
      options: { duration: 300, delay: 100, }
  });
  $('.policy-home h1').velocity({
      properties: { opacity: 0, "margin-left" : "-100vw" },
      options: { duration: 300, delay: 200, }
  });
  $('.policy-description').velocity({
      properties: { opacity: 0, "margin-left" : "-100vw" },
      options: { duration: 300, delay: 300, }
  });

  $('.yes').velocity({
      properties: { opacity: 0, "margin-left" : "-100vw" },
      options: { duration: 300, delay: 400, }
  });
  $('.no').velocity({
      properties: { opacity: 0, "margin-left" : "-100vw" },
      options: { duration: 300, delay: 500, }
  });

  $('.what').velocity({
      properties: { opacity: 0, "margin-left" : "-100vw" },
      options: { duration: 300, delay: 600, }
  });


  setTimeout(function(){
    animateResults();
  $('.policy-results').removeClass("hidden");
    $('.chart-area-container').removeClass("hidden");
    $('.policy-home').addClass("hidden");

  }, 2000);

}

function animateResults() {
  $('.chart-area').velocity({
      properties: { width : "100%" },
      options: { duration: 200, delay: 100, }
  });
  $('.chart-area').velocity({
      properties: { height : "500px" },
      options: { duration: 200, delay: 400, }
  });

  $('.bar1').velocity({
      properties: { height : "140px", opacity: 0.5 },
      options: { duration: 800, delay: 1000, easing: "spring" }
  });

  $('.bar2').velocity({
      properties: { height : "210px", opacity: 1 },
      options: { duration: 800, delay: 1200, easing: "spring" }
  });

  $('.policy-results h3').velocity({
      properties: { opacity: 1, "margin-top" : "60px" },
      options: { duration: 800, delay: 1300,}
  });

}
function createGraph() {

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',

    pointLabelFontFamily: "georgia",
    scaleFontFamily: "georgia",
    data: {
      labels: [
        "Yes, I believe that", "No, I do not believe that", "I dont know", "This is a fourth option"
      ],
      datasets: [
        {
          label: '# of Votes',
          data: [
            12,
            19,
            3,
            5,
            2,
            3
          ],
          backgroundColor: [
            'rgba(230, 230, 230, 1)', 'rgba(77, 183, 153, 1)', 'rgba(230, 230, 230,1)', 'rgba(230, 230, 230,1)'
          ],
          borderColor: [
            'rgba(230, 230, 230,1)', 'rgba(77, 183, 153, 1)', 'rgba(230, 230, 230,1)', 'rgba(230, 230, 230,1)'
          ],
          borderWidth: 0.2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },

      scales: {
        yAxes: [
          {

            barPercentage: 0.8,
            ticks: {
              fontFamily: "Georgia",
              fontSize: 18
            },

            gridLines: {

              drawBorder: false,
              display: false
            }

          }
        ],

        xAxes: [
          {

            barPercentage: 0.4,
            ticks: {
              display: false
            },

            gridLines: {

              drawBorder: false,
              display: false
            }

          }
        ]
      }
    }
  });

}
