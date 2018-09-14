$(document).ready(function() {
    let feed = new Instafeed({
        get: 'user',
        userId: '269383157',
        clientId: 'ca36b38e11224fcc9356ba752092a74d',
        accessToken: '269383157.1677ed0.03c1578b1f6342aa9f734a403ead64ab',
        template: '<div class="col-4 tCenter vCenter gridInstaFeed">' +
            '    <div class="hovereffect">' +
            '        <img class="img-responsive" src="{{image}}" alt="{{caption}}">' +
        '            <div class="overlay">' +
        '                <h2>{{caption}}</h2>' +
        '                   <p>' +
        '                       <a href="{{link}}">Go to my instagram</a>' +
        '                   </p>' +
        '            </div>' +
            '    </div>' +
            '</div>',
        resolution: 'low_resolution',
        limit: 6,
        after: function() {
            // disable button if no more results to load
            if (!this.hasNext()) {
                $('#loadMoreBtn').setAttribute('disabled', 'disabled');
            }
        },
    });
    $('#loadMoreBtn').on('click', function() {
        feed.next();
    });
    feed.run();
});
