import React from 'react'
import { render } from 'react-dom'
import * as assets from 'assets'
import Picture from 'lib'
import './style.css'

const App = () => {
  return (
    <>
      <section id="multiple-effects-image">
        <figure>
          <Picture alt="" src={assets.imageJpg} grayscale={1} />
          <figcaption>A simple image tag will be rendered here</figcaption>
        </figure>
      </section>
      <section id="placeholder-image">
        <figure>
          <Picture alt="" placeholder={assets.placeholderJpg} src={assets.imageJpg} />
          <figcaption>A simple image tag with a placeholder image</figcaption>
        </figure>
      </section>
      <section id="broken-image">
        <figure>
          <Picture
            alt=""
            grayscale={1}
            placeholder={assets.placeholderJpg}
            src="broken-image.jpg"
          />
          <figcaption>A simple image tag with a broken src image</figcaption>
        </figure>
      </section>
      <section id="multiple-placeholder">
        <figure>
          <Picture
            alt=""
            sources={[
              {
                srcSet: assets.imageWebp,
                type: 'image/webp',
              },
              {
                srcSet: assets.imageJpg,
                type: 'image/jpg',
              },
            ]}
          />
          <figcaption>
            A picture element tag with different sources and no placeholder images
          </figcaption>
        </figure>
      </section>
      <section id="multiple-placeholder">
        <figure>
          <Picture
            alt=""
            sources={[
              {
                placeholder: assets.placeholderWebp,
                srcSet: assets.imageWebp,
                type: 'image/webp',
              },
              {
                placeholder: assets.placeholderJpg,
                srcSet: assets.imageJpg,
                type: 'image/jpg',
              },
            ]}
          />
          <figcaption>
            A picture element tag with different sources and placeholder images based on type
          </figcaption>
        </figure>
      </section>
      <section id="delay-image">
        <figure>
          <Picture
            delay={1750}
            alt=""
            sources={[
              {
                placeholder: assets.placeholderWebp,
                srcSet: assets.imageWebp,
                type: 'image/webp',
              },
              {
                placeholder: assets.placeholderJpg,
                srcSet: assets.imageJpg,
                type: 'image/jpg',
              },
            ]}
          />
          <figcaption>A picture element with delayed lazy loading</figcaption>
        </figure>
      </section>
      <section id="treshold-image">
        <figure>
          <Picture
            alt=""
            sources={[
              {
                placeholder: assets.placeholderWebp,
                srcSet: assets.imageWebp,
                type: 'image/webp',
              },
              {
                placeholder: assets.placeholderJpg,
                srcSet: assets.imageJpg,
                type: 'image/jpg',
              },
            ]}
            options={{
              rootMargin: '0px 0px 0px 0px',
              threshold: 1.0,
            }}
          />
          <figcaption>A picture element with a treshold</figcaption>
        </figure>
      </section>
    </>
  )
}

render(<App />, document.getElementById('root'))
