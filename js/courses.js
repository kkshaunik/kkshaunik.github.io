// Render courses on courses.html and provide search functionality
const categories = {
  'Enthusiastic': document.getElementById('enthusiasticCourses'),
  '6 Weeks': document.getElementById('sixWeekCourses'),
  '6 Months': document.getElementById('sixMonthCourses')
};

function createCourseCard(course) {
  const div = document.createElement('div');
  div.className = 'col-md-4 mb-4 course-card';
  div.dataset.title = course.title.toLowerCase();
  div.innerHTML = `
    <div class="card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${course.title}</h5>
        <p class="card-text">${course.description}</p>
        <p class="mb-1"><strong>Level:</strong> ${course.level}</p>
        <p class="mb-1"><strong>Duration:</strong> ${course.duration}</p>
        <p class="mb-1"><strong>Fees:</strong> ${course.fees}</p>
        <ul>${course.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        <a href="contact.html" class="btn btn-sm btn-primary mt-auto">Enroll</a>
      </div>
    </div>`;
  return div;
}

courses.forEach(course => {
  const container = categories[course.category];
  if (container) {
    container.appendChild(createCourseCard(course));
  }
});

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll('.course-card').forEach(card => {
      card.style.display = card.dataset.title.includes(term) ? '' : 'none';
    });
  });
}
