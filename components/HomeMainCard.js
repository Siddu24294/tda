import {Card, CardFooter} from "@nextui-org/react";

export default function HomeMainCard(props) {
    return (
        <>
            <div className={"h-screen bg-white flex flex-col justify-center items-center"}>
                <Card
                    isFooterBlurred={true}
                    radius={"lg"}
                    className={"border-none bg-[url('/images/mainimage.jpg')] bg-no-repeat bg-cover bg-center bg-opacity-0 backdrop-blur-2xl h-4/5 w-[90%]"}
                    shadow={"lg"}
                >
                    <p className={"font-extrabold text-amber-50 text-5xl"}>
                        sample text
                    </p>

                                        <CardFooter
                        className={"justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"}>
                        <p className={"text-5xl text-ex text-white/80"}>sample text</p>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}