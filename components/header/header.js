$(document).ready(() => {
  const $website = $('.webcontent-container');
  const $header = $('.webpage-header');
  const $sidebar = $('.navigation-sidebar');
  const $scrollProgress = $('.navigation-sidebar aside');
  const $sidebarButton = $('.sidebar-button');
  const $document = $(document);
  const $documentBody = $(document.body);
  const $window = $(window);
  
  $sidebarButton.click(() => {
    $sidebar.toggleClass('active');
    $sidebarButton.toggleClass('active');
    $header.toggleClass('active');
    $website.toggleClass('active');
    $documentBody.toggleClass('no-scroll');
  });
  
  $window.resize(() => {
    $sidebar.removeClass('active');
    $sidebarButton.removeClass('active');
    $header.removeClass('active');
    $website.removeClass('active');
    $documentBody.removeClass('no-scroll');
  });
  
  $document.scroll(() => {
    const amountScrolled = $document.scrollTop();
    const percentScrolled = amountScrolled / ($document.height() - $window.height());
    $scrollProgress.css('height', percentScrolled * 100 + '%');
  });
});
