import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Lightbox from 'react-images'

const RenderGallery = props => {
	const { openLightbox, images } = props
	if (!images) return null

	return (
		<div className="row">
			{images.map((obj, i) => (
				<article className="6u 12u$(xsmall) work-item" key={i}>
					<a
						className="image fit thumb"
						href={obj.src}
						onClick={(e) => openLightbox(i, e)}
					>
						<img src={obj.thumbnail} />
					</a>
					<h3>{obj.caption}</h3>
					<p>{obj.description}</p>
				</article>
			))}
		</div>
	)
}

const Gallery = props => {
	const { images } = props
	const [currentImage, setCurrentImage] = useState(0)
	const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false)

	const openLightbox = (index, event) => {
		event.preventDefault()
		setCurrentImage(index)
		setLightBoxIsOpen(true)
	}


	const closeLightbox = () => {
		setCurrentImage(0)
		setLightBoxIsOpen(false)
	}


	const gotoPrevious = () =>
		setCurrentImage(currentImage - 1)


	const gotoNext = () =>
		setCurrentImage(currentImage + 1)


	const gotoImage = index =>
		setCurrentImage(index)


	const handleClickImage = () => {
		if (currentImage === images.length - 1) return
		gotoNext()
	}

	return (
		<div>
			<RenderGallery
				openLightbox={openLightbox}
			/>
			<Lightbox
				currentImage={currentImage}
				images={images}
				isOpen={lightBoxIsOpen}
				onClickImage={handleClickImage}
				onClickNext={gotoNext}
				onClickPrev={gotoPrevious}
				onClickThumbnail={gotoImage}
				onClose={closeLightbox}
			/>
		</div>
	)
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
	images: PropTypes.array
}

export default Gallery
