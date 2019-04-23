import React from 'react';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

const Homepage = () => {
    //let Image = cloudinaryReact.Image;

    let width = window.innerWidth;
    let imgWidth = width * 0.9;

    return (
        <div>
            <Image
                cloudName="dl9xyhypx"
                publicId="mri/Untitled_MRI_Oil_on_Canvas.jpg"
                width={imgWidth}
            >
                <Transformation quality="auto:eco" fetch_format="auto" />
            </Image>
            <p>
                Louise Lahive works primarily with Oil on Canvas, she also adds
                objects that are sourced from nature, for example seeds or dry
                beans, these objects are carefully placed into her paintings and
                drawings using oil paint or rabbit skin glue, sometimes they are
                covered or buried in the paint, sometimes they are painted as
                mini objects in their own right and added to the images as
                texture.
            </p>

            <p>
                Lahive is committed to exploring pattern in her work, pattern
                that is sourced from natural phenomena like rain or heat, often
                used as a semi random process to create the image. For example
                leaving the canvas in the rain to create a direct pattern, or
                cracking areas of old canvas.
            </p>

            <p>
                This ‘natural data’ as Lahive describes it is not only limited
                to the direct process but is also an interest in the paintings
                subject matter. The natural phenomenon that we can view through
                scientific methods is linked to what we can see with our naked
                eye and Lahive explores these patterns and presents them to us
                as ambiguous areas of her images. The pattern left by rain could
                be bacteria magnetised, the patterns produced by an MRI could be
                a landscape.
            </p>

            <p>
                The themes that are presented in the paintings are sometimes
                expressed through the biographical. Lahive’s unflinching view of
                her direct experience leads us to an exploration of imposed or
                imagined schisms we might experience together.
            </p>
        </div>
    );
};
export default Homepage;
