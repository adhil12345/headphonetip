  var postContent = document.querySelector('.post-content');
  var tocContainer = document.querySelector('.tableofcontentHeadding-display');
  var headings = postContent.querySelectorAll('h2, h3');

  headings.forEach(function (heading, index) {
    var headingId = 'toc-heading-' + index;
    heading.setAttribute('id', headingId);

    var tocLink = document.createElement('a');
    tocLink.textContent = heading.textContent;
    tocLink.href = '#' + headingId;

    if (heading.tagName.toLowerCase() === 'h2') {
      tocLink.classList.add('h2-heading');
    } else if (heading.tagName.toLowerCase() === 'h3') {
      tocLink.classList.add('h3-heading');
    }

    tocLink.addEventListener('click', function (event) {
      event.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth' });
    });

    tocContainer.appendChild(tocLink);
  });
