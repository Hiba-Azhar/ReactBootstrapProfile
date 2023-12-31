import React from 'react'

function Projects() {
  return (
    <div class='container mt-5' style={{ backgroundColor: '#D3D3D3' }}>
      <div class='row g-4 py-5 row-cols-1 row-cols-lg-3'>
        <div class='feature col'>
          <div class='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              class='bi bi-collection'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z' />
            </svg>
          </div>
          <h3 class='fs-2 text-body-emphasis'>Featured title</h3>

          <a href='#' class='icon-link'>
            Call to action
          </a>
        </div>
        <div class='feature col'>
          <div class='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              class='bi bi-toggles'
              viewBox='0 0 16 16'
            >
              <path d='M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7' />
            </svg>
          </div>
          <h3 class='fs-2 text-body-emphasis'>Featured title</h3>

          <a href='#' class='icon-link'>
            Call to action
            <svg class='bi'></svg>
          </a>
        </div>
        <div class='feature col'>
          <div class='feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='25'
              fill='currentColor'
              class='bi bi-person-circle'
              viewBox='0 0 16 16'
            >
              <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
              <path
                fill-rule='evenodd'
                d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1'
              />
            </svg>
          </div>
          <h3 class='fs-2 text-body-emphasis'>Featured title</h3>

          <a href='#' class='icon-link'>
            Call to action
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
