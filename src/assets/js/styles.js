$(function() {
    /* GNB */
    $('.bro-gnb li > a').on('mouseenter', function() {
        var nav_posX = $('.bro-gnb').offset().left;
        var menu_posX = $(this).offset().left;
        var self_w = $(this).width();

        $('#menuBar').css({
            left : menu_posX - nav_posX + 'px',
            width: self_w + 'px'
        });
    });

    $('.serviceList ul > li')
    .on('mouseenter', function() {
        var menu_posY = $(this).position().top;
        var self_h = $(this).height();

        $(this).parents('.serviceList').find('.activator').css({
            top : menu_posY + 'px',
            height: self_h + 'px'
        });
    })
    .on('click', function() {
        var serverVal = $(this).find('.mark').text();
        $('.selectValue').text(serverVal);

        $(this).parents('ul').find('li').removeClass('on');
        $(this).addClass('on');
    });


    /* STEAM FRIEND
    var friends = [
        {
            'img': '_profile6.jpg',
            'name': 'kajuya',
            'group': 'online'
        },

        {
            'img': '_profile7.jpg',
            'name': 'kuma',
            'group': 'offline'
        },

        {
            'img': '_profile9.jpg',
            'name': 'yamato',
            'group': 'online'
        },

        {
            'img': '_profile3.jpg',
            'name': 'jiraiya',
            'group': 'online'
        },

        {
            'img': '_profile2.jpg',
            'name': 'shenju',
            'group': 'offline'
        }
    ];

    $.each(friends, function(i) {
        var list_item = '';
        list_item += '<li>';
        list_item += '  <figure class="profile mg"><img src="/assets/images/' + friends[i].img  + '" alt=""/></figure>';
        list_item += '  <strong>' + friends[i].name + '</strong>';
        list_item += '  <div class="option">';
        list_item += '      <button class="fa fa-plus-circle fa-lg"></button>';
        list_item += '      <button class="fa fa-minus-circle fa-lg"></button>';
        list_item += '      <button class="fa fa-info-circle fa-lg"></button>';
        list_item += '  </div>';
        list_item += '  <p class="tip sm arrow-right" style="display: none">You can no longer invite<br/>more people</p>';
        list_item += '</li>';

        $('#group-'+friends[i].group).find('ul').append(list_item);
    });
    */

    /* 팀원 추가
    $('#group-online').on('click', '.fa-plus-circle', function() {
        var select_item = $(this).parents('li').html();
        var maxLimit = 3;

        if($('#group-team ul li').length < maxLimit) {
            $('#group-team').find('ul').append('<li>' + select_item + '</li>');
            $(this).parents('li').remove();
        } else {
            alert('더 이상 추가할 수 없습니다.');
        }

        friendCount();
        friendHeight();
        matchMode();
        checkTeamSlot();
    });
    */

    /* 팀원 삭제
    $('#group-team').on('click', '.fa-minus-circle', function() {
        var select_item = $(this).parents('li').html();
        $('#group-online').find('ul').append('<li>' + select_item + '</li>');
        $(this).parents('li').remove();

        friendCount();
        friendHeight();
        matchMode();
        checkTeamSlot();
    });
    */

    /* INVITATIONS 응하기 */
    $('.invitations .userList li')
    .on('click', '.allow', function() {

        var friendsImg = $(this).parents('li').find('.profile img').attr('src'),
            friendsName = $(this).parents('li').find('strong').text();

        var list_item = '';
        list_item += '<li>';
        list_item += '  <figure class="profile mg"><img src="' + friendsImg  + '" alt=""/></figure>';
        list_item += '  <strong>' + friendsName + '</strong>';
        list_item += '  <div class="option">';
        list_item += '      <button class="fa fa-plus-circle fa-lg"></button>';
        list_item += '      <button class="fa fa-minus-circle fa-lg"></button>';
        list_item += '      <button class="fa fa-info-circle fa-lg"></button>';
        list_item += '  </div>';
        list_item += '  <p class="tip sm arrow-right" style="display: none">You can no longer invite<br/>more people</p>';
        list_item += '</li>';

        $(this).parents('li').remove();
        $('#group-online ul').append(list_item);

        invitationsCount();
        friendCount();
        friendHeight();
        friendAll();
    })
    .on('click', '.refuse', function() {
        $(this).parents('li').remove();
        invitationsCount();
    });

    //invitation 리스트 갯수를 체크 함
    function invitationsCount() {
        var current_count = $('.invitations .userList li').length;
        if(current_count == 0) {
            invitations()
        } else {
            return false;
        }
    }

    //초기화
    friendHeight();
    friendCount();
    friendAll();
    matchMode();
    checkTeamSlot();

    $('.steamFriend-list h4').on('click', function() {
        var list = $(this).next('.userList');
        var list_h = list.find('ul').height();
        var self_height;

        list.css({
            height: list_h + 'px'
        });

        if(list.height() == 0) {

        } else {
            self_height = 0;
        }

        list.css({
            height: self_height + 'px'
        });
    });
    /* //STEAM FRIEND */


    /*
    $('.match').on('click', '.btn-random', function() {
        var modeName = $('#matchTeam').attr('data-modeName');

        if($(this).is('.random')) {
            $(this).removeClass('random');
            selectMatch(modeName, '');
        } else {
            $(this).addClass('random');
            selectMatch(modeName, 'Random');
        }
    })
    */

    /* 채팅 */
    $('.typeArea').on('focus', function() {
        var hidden_h = $('.chat .hiddenArea').height();
        var contain_h = $('.chat .containArea').outerHeight(true);
        var typeArea_h = $('.chat .typeArea').outerHeight(true);

        if(hidden_h == 0) {
            $('.chat .hiddenArea').css({
                height : contain_h + 'px',
                opacity: 1
            })
        }
    });

    /* 채팅창 이외에 다른곳을 클릭했을 때 발생하는 이벤트 */
    $(window).on('click', function(e) {
        if($(e.target).parents('.chat').length == 0) {
            $('.chat .hiddenArea').css({
                height : 0 + 'px',
                opacity: 0
            })
        }
    })

    /* ESC 키 이벤트 */
    $(document).on('keydown', function(e) {
        if(e.which == 27 && $('.dim.scaleInMotion').length > 0) {
            //모달 id 체크
            showModal('.modalCenter');
        } else if(e.which == 27 && $('.dim.scaleInMotion').length == 0) {
            steamList();
        }
    })
});


/* team그룹의 유저수에 따라 변경 */
function matchMode() {
    var teamCount = $('#group-team ul li').length;
    $('.selectMatch button').removeClass('on');

    if(teamCount == 0) {
        selectMatch('solo');
        $('.usermatch').attr('class', 'usermatch solo'); //TEAM MATCH 버튼 SHOW / HIDE

    }
    else if(teamCount == 1) {
        selectMatch('duo');
        $('.usermatch').attr('class', 'usermatch duo'); //TEAM MATCH 버튼 SHOW / HIDE

    }
    else {
        selectMatch('squad');
        $('.usermatch').attr('class', 'usermatch squad'); //TEAM MATCH 버튼 SHOW / HIDE
    }
}

/* TeamMatch Random Button */
function teamRandom() {
    var modeName = $('#matchTeam').attr('data-modeName');
    var btn_random = $('#matchTeam .btn-random');
    var teamCount = $('.steamFriend-list .team > i').text();

     if(btn_random.is('.random')) {
        btn_random.removeClass('random');

        if(teamCount == 1 && modeName == 'squad') {
            modeName = 'duo';
            $('#matchTeam').attr('data-modeName', modeName);
            selectMatch(modeName);
        }
        aaRandom(modeName, '');
    } else {
        btn_random.addClass('random');
        aaRandom(modeName, 'Random');
    }
}


//MODE SELECT
function selectMatch(modeName, randomState) {
    var mode = '.' + modeName;
    var teamCount = $('.steamFriend-list .team > i').text();

    /* TEAM MATCH 버튼 색상 변경 */
    $('.selectMatch button').removeClass('on');
    $('.selectMatch').find(mode).addClass('on');

    $('.playMode .modeName').text(modeName);
    $('#matchTeam').attr('data-modename', modeName);

    /*
        - solo와 full squad 일때 random 버튼 숨김 처리
        - 나머지 경우에는 random 버튼 상시 노출
    */

     if(modeName == 'solo' && teamCount == 0 || modeName == 'duo' && teamCount == 1 || modeName == 'squad' && teamCount == 3 ) {
        aaRandom(modeName, '');
        $('.btn-random').removeClass('random');
        $('#btn-random').removeClass('able');

    } else {
        aaRandom(modeName, 'Random');
        $('.btn-random').addClass('random');
        $('#btn-random').addClass('able');
    }

    if(modeName != 'solo') {
        $('.btn-leave').addClass('on');
    } else {
        $('.btn-leave').removeClass('on');
    }
}

//캐릭터 배경 변경
function aaRandom(modeName, randomState) {
    var teamCount = $('.steamFriend-list .team > i').text();
    var Random;

    if(randomState) {
        Random = randomState;
    } else {
        Random = '';
    }

    /*
        팀원 수를 체크 해야 함 var teamCount

        mode + {teamCount:0}-solo (random x)
        mode + {teamCount:0}-duo / 솔로 듀오 (random x)
        mode + {teamCount:0}-duoRandom / 솔로 듀오랜덤 (random o)
        mode + {teamCount:0}-squad / 솔로 스쿼드 (random x)
        mode + {teamCount:0}-squadRandom / 솔로 스쿼드랜덤 (random o)

        mode + {teamCount:1}-duo (random x)
        mode + {teamCount:1}-squad / 듀오 스쿼드 랜덤 (random o)
        mode + {teamCount:1}-squadRandom / 듀오 스쿼드 랜덤 (random o)

        mode + {teamCount:2}-squad / 3인 스쿼드 (random x)
        mode + {teamCount:2}-squadRandom / 3인 스쿼드 랜덤 (random o)

        mode + {teamCount:3}-squad / 4인 스쿼드 (random x)
    */

    $('#wrapper').removeAttr('class');
    $('#wrapper').addClass('mode' + teamCount + '-' + modeName + Random);
}


/* friend invitations show / hide*/
function invitations() {
    var invitations = $('.invitations');

    if(invitations.is('.show')) {
        invitations.removeClass('show');
    } else {
        invitations.addClass('show');
    }
}

//팀 파괴
function leaveTeam() {
    var slot_count = $('.steamSingle .slot .thum img').length;

    if(slot_count > 0) {
        $('#group-online ul').append($('#group-team ul').html());
        $('.steamSingle .slot .thum img').remove();
        $('.steamSingle .slot .thum').removeClass('on');
        $('#group-team ul li').remove();

        friendCount();
        friendHeight();
        matchMode();
        checkTeamSlot();
    };
};

/* slot 팀원 체크 */
function checkTeamSlot() {
    var oldCount = $('.steamSingle .slot .thum img').length;

    $('.steamSingle .slot .thum img').remove();
    $('.steamSingle .slot .tip').remove();

    $('#group-team ul li').each(function(idx) {
        var profile_thum = $(this).find('.profile img').attr('src');
        var profile_name = $(this).find('strong').text();

        $('.steamSingle .slot').eq(idx)
            .find('.thum')
            .append('<img src="' + profile_thum + '">')
            .end()
            .append('<p class="tip sm arrow-bottom">' + profile_name + '</p>');


        setTimeout(function() {
            $('.steamSingle .slot').eq(idx)
                .find('.thum').addClass('on');
        })
    });

    var newCount = $('.steamSingle .slot .thum img').length;

    if(oldCount > newCount) {
        $('.steamSingle .slot .thum').eq(newCount).removeClass('on');
    }

    //console.log(oldCount, newCount);
};

/* 그룹별 팀원 수 */
function friendCount() {
    $('.steamFriend-list ul').each(function(idx) {
        var list_count = $(this).find('li').length;
        $('.steamFriend-list h4').eq(idx).find('i').text(list_count);
    });
}

/* 그룹별 리스트 높이 체크 */
function friendHeight() {
    $('.steamFriend-list ul').each(function(idx) {
        var list_h = $(this).height();
        $(this).parent().css('height', list_h + 'px');
    });
}

/* 친구 max count */
function friendAll() {
    var maxCount = $('.steamFriend-list ul li').length;
    $('.maxCount').text(maxCount);
}

function steamList() {
    if($('.steamFriend-list').is(':hidden') != true && $('.invitations').is('.show')) {
        invitations();
    }

    $('.steamFriend-list').slideToggle();
}

function userserver(state) {
    if(state == 'show') {
        $('#userServerLlist').addClass('isView');
    } else if(state == 'hide') {
        $('#userServerLlist').removeClass('isView');
    }
}

//function userOption() {
function showModal(modal_id) {
    if($('.dim').is('.scaleInMotion')) {
        $('.dim').removeClass('scaleInMotion');
        $(modal_id).fadeOut();
    } else {
        $('.dim').addClass('scaleInMotion');
        $(modal_id).fadeIn();
    }
}