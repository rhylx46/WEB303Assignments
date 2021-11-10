// JavaScript Document

$(function(){
    $('.accord').on('click', '.accord-label', function(e){
        e.preventDefault();
        $(".accord-content").slideUp(1000);

        if(!$(this).next().is(':visible')) {
    
        $(this).next().slideDown(1000);
        }
    });

    $('.tab-list').each(function(){
        let $this = $(this);                                    
        $this.on('click', '.tab', function (e) {     
            e.preventDefault();                                
            let $currentLink = $(this);                        
            let $currentTab = $currentLink.parent();
            let currentId = this.hash;                          

            if (currentId && !$currentTab.is('.active')) {     

                let $oldActivetab = $this.find('li.active');      
                let $oldSelector = $oldActivetab.find('a').attr('href');     
                let $oldContent = $($oldSelector);                    

                $oldContent.removeClass('active');               
                $oldActivetab.removeClass('active');          

                $(currentId).addClass('active');                
                $currentTab.addClass('active');       
            }
        });
    });

});