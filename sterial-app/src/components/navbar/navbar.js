import { useEffect } from 'react';

const navbar = () => {

  useEffect(() => {
    const siteMenuClone = () => {
      const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
      const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

      jsCloneNavs.forEach(nav => {
        const navCloned = nav.cloneNode(true);
        navCloned.setAttribute('class', 'site-nav-wrap');
        siteMobileMenuBody.appendChild(navCloned);
      });

      setTimeout(() => {
        const hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll('.has-children');

        let counter = 0;
        hasChildrens.forEach(hasChild => {
          const refEl = hasChild.querySelector('a');
          const newElSpan = document.createElement('span');
          newElSpan.setAttribute('class', 'arrow-collapse collapsed');
          hasChild.insertBefore(newElSpan, refEl);

          const arrowCollapse = hasChild.querySelector('.arrow-collapse');
          arrowCollapse.setAttribute('data-toggle', 'collapse');
          arrowCollapse.setAttribute('data-target', '#collapseItem' + counter);

          const dropdown = hasChild.querySelector('.dropdown');
          dropdown.setAttribute('class', 'collapse');
          dropdown.setAttribute('id', 'collapseItem' + counter);

          counter++;
        });
      }, 1000);

      const menuToggle = document.querySelectorAll('.js-menu-toggle');
      menuToggle.forEach(mtoggle => {
        mtoggle.addEventListener('click', (e) => {
          if (document.body.classList.contains('offcanvas-menu')) {
            document.body.classList.remove('offcanvas-menu');
            mtoggle.classList.remove('active');
          } else {
            document.body.classList.add('offcanvas-menu');
            mtoggle.classList.add('active');
          }
        });
      });

      const specifiedElement = document.querySelector('.site-mobile-menu');
      document.addEventListener('click', (event) => {
        const isClickInside = specifiedElement.contains(event.target);
        let mt = false;
        menuToggle.forEach(mtoggle => {
          if (mtoggle.contains(event.target)) mt = true;
        });

        if (!isClickInside && !mt) {
          if (document.body.classList.contains('offcanvas-menu')) {
            document.body.classList.remove('offcanvas-menu');
            menuToggle.forEach(mtoggle => mtoggle.classList.remove('active'));
          }
        }
      });
    };

    siteMenuClone();
  }, []);

  return (
    <div>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-body"></div>
      </div>
      <nav className="js-clone-nav">
        {/* Your navigation structure here */}
      </nav>
      <button className="js-menu-toggle">Toggle Menu</button>
    </div>
  );
};

export default navbar;
