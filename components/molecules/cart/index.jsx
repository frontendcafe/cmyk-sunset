import Image from 'components/atoms/Image'
import Title from 'components/atoms/Title'
import Subtitle from 'components/atoms/Subtitle'
import Paragraph from 'components/atoms/Paragraph'
import Price from 'components/atoms/Price'
import Button from 'components/atoms/Button'


export default function Cart() {
    return (
        <div >
            "Checkout";
            <Image
                src={'/public/vercel.svg'}
                alt={"alt"}
                width={280}
                height={360}
            />
            <Title
                size='md'
                content=''
            />
            <Subtitle size="md">{ }</Subtitle>
            <div className="">
                <button className="">-</button>
                <Paragraph content='Total:' />
                <button className="">+</button>
            </div>
            <div>
                <Paragraph content='Total:' />
                <Price
                    size='lg'
                    price={"650"}
                    currency
                ></Price>
            </div>
            <Button
                size="md"
                color="green"
            ></Button>
        </div>
    )
}