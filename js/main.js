// $(document).ready(function() {
//     let feed = new Instafeed({
//         get: 'user',
//         userId: '269383157',
//         clientId: 'ca36b38e11224fcc9356ba752092a74d',
//         accessToken: '269383157.1677ed0.03c1578b1f6342aa9f734a403ead64ab',
//         template: '<div class="col-4 tCenter vCenter gridInstaFeed">' +
//             '    <div class="hovereffect">' +
//             '        <img class="img-responsive" src="{{image}}" alt="{{caption}}">' +
//         '            <div class="overlay">' +
//         '                <h2>{{caption}}</h2>' +
//         '                   <p>' +
//         '                       <a href="{{link}}">Go to my instagram</a>' +
//         '                   </p>' +
//         '            </div>' +
//             '    </div>' +
//             '</div>',
//         resolution: 'low_resolution'
//     });
//     feed.run();
// });
$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: true,
    verticalScrolling: true,

    // Set the global alignment offsets
    horizontalOffset: 0,
    verticalOffset: 0,

    // Refreshes parallax content on window load and resize
    responsive: false,

    // Select which property is used to calculate scroll.
    // Choose 'scroll', 'position', 'margin' or 'transform',
    // or write your own 'scrollProperty' plugin.
    scrollProperty: 'scroll',

    // Select which property is used to position elements.
    // Choose between 'position' or 'transform',
    // or write your own 'positionProperty' plugin.
    positionProperty: 'position',

    // Enable or disable the two types of parallax
    parallaxBackgrounds: true,
    parallaxElements: true,

    // Hide parallax elements that move outside the viewport
    hideDistantElements: true,

    // Customise how elements are shown and hidden
    hideElement: function($elem) { $elem.hide(); },
    showElement: function($elem) { $elem.show(); }
});