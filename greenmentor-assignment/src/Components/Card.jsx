import React from 'react'
import "./Card.css"
export const Card = () => {
    return (
        <div className='card-container'>
            <div>
                <div>
                    <h3>Current Year Emissions </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M5.83333 0C9.05508 0 11.6667 2.61158 11.6667 5.83333C11.6667 9.05508 9.05508 11.6667 5.83333 11.6667C2.61158 11.6667 0 9.05508 0 5.83333C0 2.61158 2.61158 0 5.83333 0ZM5.83333 1.16667C4.59566 1.16667 3.40867 1.65833 2.5335 2.5335C1.65833 3.40867 1.16667 4.59566 1.16667 5.83333C1.16667 7.07101 1.65833 8.258 2.5335 9.13317C3.40867 10.0083 4.59566 10.5 5.83333 10.5C7.07101 10.5 8.258 10.0083 9.13317 9.13317C10.0083 8.258 10.5 7.07101 10.5 5.83333C10.5 4.59566 10.0083 3.40867 9.13317 2.5335C8.258 1.65833 7.07101 1.16667 5.83333 1.16667ZM5.8275 4.66667C6.153 4.66667 6.41667 4.93033 6.41667 5.25583V8.24483C6.52787 8.30904 6.61477 8.40815 6.66391 8.52678C6.71305 8.64542 6.72167 8.77695 6.68843 8.90098C6.6552 9.02501 6.58197 9.13461 6.48009 9.21278C6.37822 9.29095 6.25341 9.33333 6.125 9.33333H5.83917C5.7618 9.33333 5.68518 9.3181 5.6137 9.28849C5.54222 9.25888 5.47727 9.21548 5.42256 9.16077C5.36785 9.10606 5.32446 9.04111 5.29485 8.96963C5.26524 8.89815 5.25 8.82154 5.25 8.74417V5.83333C5.09529 5.83333 4.94692 5.77188 4.83752 5.66248C4.72813 5.55308 4.66667 5.40471 4.66667 5.25C4.66667 5.09529 4.72813 4.94692 4.83752 4.83752C4.94692 4.72813 5.09529 4.66667 5.25 4.66667H5.8275ZM5.83333 2.91667C5.98804 2.91667 6.13642 2.97813 6.24581 3.08752C6.35521 3.19692 6.41667 3.34529 6.41667 3.5C6.41667 3.65471 6.35521 3.80308 6.24581 3.91248C6.13642 4.02188 5.98804 4.08333 5.83333 4.08333C5.67862 4.08333 5.53025 4.02188 5.42086 3.91248C5.31146 3.80308 5.25 3.65471 5.25 3.5C5.25 3.34529 5.31146 3.19692 5.42086 3.08752C5.53025 2.97813 5.67862 2.91667 5.83333 2.91667Z" fill="black" fill-opacity="0.8" />
                    </svg>
                </div>
                <p>contribution to Scope3</p>
                <div className='card-inner-div'>
                    <p>39699 CO2e</p>
                    <p>7.6%YOY↑</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Revenue to emission ratio </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M5.83333 0C9.05508 0 11.6667 2.61158 11.6667 5.83333C11.6667 9.05508 9.05508 11.6667 5.83333 11.6667C2.61158 11.6667 0 9.05508 0 5.83333C0 2.61158 2.61158 0 5.83333 0ZM5.83333 1.16667C4.59566 1.16667 3.40867 1.65833 2.5335 2.5335C1.65833 3.40867 1.16667 4.59566 1.16667 5.83333C1.16667 7.07101 1.65833 8.258 2.5335 9.13317C3.40867 10.0083 4.59566 10.5 5.83333 10.5C7.07101 10.5 8.258 10.0083 9.13317 9.13317C10.0083 8.258 10.5 7.07101 10.5 5.83333C10.5 4.59566 10.0083 3.40867 9.13317 2.5335C8.258 1.65833 7.07101 1.16667 5.83333 1.16667ZM5.8275 4.66667C6.153 4.66667 6.41667 4.93033 6.41667 5.25583V8.24483C6.52787 8.30904 6.61477 8.40815 6.66391 8.52678C6.71305 8.64542 6.72167 8.77695 6.68843 8.90098C6.6552 9.02501 6.58197 9.13461 6.48009 9.21278C6.37822 9.29095 6.25341 9.33333 6.125 9.33333H5.83917C5.7618 9.33333 5.68518 9.3181 5.6137 9.28849C5.54222 9.25888 5.47727 9.21548 5.42256 9.16077C5.36785 9.10606 5.32446 9.04111 5.29485 8.96963C5.26524 8.89815 5.25 8.82154 5.25 8.74417V5.83333C5.09529 5.83333 4.94692 5.77188 4.83752 5.66248C4.72813 5.55308 4.66667 5.40471 4.66667 5.25C4.66667 5.09529 4.72813 4.94692 4.83752 4.83752C4.94692 4.72813 5.09529 4.66667 5.25 4.66667H5.8275ZM5.83333 2.91667C5.98804 2.91667 6.13642 2.97813 6.24581 3.08752C6.35521 3.19692 6.41667 3.34529 6.41667 3.5C6.41667 3.65471 6.35521 3.80308 6.24581 3.91248C6.13642 4.02188 5.98804 4.08333 5.83333 4.08333C5.67862 4.08333 5.53025 4.02188 5.42086 3.91248C5.31146 3.80308 5.25 3.65471 5.25 3.5C5.25 3.34529 5.31146 3.19692 5.42086 3.08752C5.53025 2.97813 5.67862 2.91667 5.83333 2.91667Z" fill="black" fill-opacity="0.8" />
                    </svg>
                </div>
                <div className='card-inner-div'>
                    <p>136.0</p>
                    <p>3.7%YOY↑</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Category-1</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M5.83333 0C9.05508 0 11.6667 2.61158 11.6667 5.83333C11.6667 9.05508 9.05508 11.6667 5.83333 11.6667C2.61158 11.6667 0 9.05508 0 5.83333C0 2.61158 2.61158 0 5.83333 0ZM5.83333 1.16667C4.59566 1.16667 3.40867 1.65833 2.5335 2.5335C1.65833 3.40867 1.16667 4.59566 1.16667 5.83333C1.16667 7.07101 1.65833 8.258 2.5335 9.13317C3.40867 10.0083 4.59566 10.5 5.83333 10.5C7.07101 10.5 8.258 10.0083 9.13317 9.13317C10.0083 8.258 10.5 7.07101 10.5 5.83333C10.5 4.59566 10.0083 3.40867 9.13317 2.5335C8.258 1.65833 7.07101 1.16667 5.83333 1.16667ZM5.8275 4.66667C6.153 4.66667 6.41667 4.93033 6.41667 5.25583V8.24483C6.52787 8.30904 6.61477 8.40815 6.66391 8.52678C6.71305 8.64542 6.72167 8.77695 6.68843 8.90098C6.6552 9.02501 6.58197 9.13461 6.48009 9.21278C6.37822 9.29095 6.25341 9.33333 6.125 9.33333H5.83917C5.7618 9.33333 5.68518 9.3181 5.6137 9.28849C5.54222 9.25888 5.47727 9.21548 5.42256 9.16077C5.36785 9.10606 5.32446 9.04111 5.29485 8.96963C5.26524 8.89815 5.25 8.82154 5.25 8.74417V5.83333C5.09529 5.83333 4.94692 5.77188 4.83752 5.66248C4.72813 5.55308 4.66667 5.40471 4.66667 5.25C4.66667 5.09529 4.72813 4.94692 4.83752 4.83752C4.94692 4.72813 5.09529 4.66667 5.25 4.66667H5.8275ZM5.83333 2.91667C5.98804 2.91667 6.13642 2.97813 6.24581 3.08752C6.35521 3.19692 6.41667 3.34529 6.41667 3.5C6.41667 3.65471 6.35521 3.80308 6.24581 3.91248C6.13642 4.02188 5.98804 4.08333 5.83333 4.08333C5.67862 4.08333 5.53025 4.02188 5.42086 3.91248C5.31146 3.80308 5.25 3.65471 5.25 3.5C5.25 3.34529 5.31146 3.19692 5.42086 3.08752C5.53025 2.97813 5.67862 2.91667 5.83333 2.91667Z" fill="black" fill-opacity="0.8" />
                    </svg>
                </div>
                <p>contribution to Scope3</p>
                <div className='card-inner-div'>
                    <p style={{color:"black"}}>32% of Scope3</p>
                </div>
            </div>
            <div>
                <h2>Total number of reached suppliers</h2>
                <h1 style={{marginTop:"0.88rem"}}>143</h1>
            </div>
        </div>
    )
}
