import Collapse from 'common/Collapse';
import { Link } from 'react-router-dom';

function FAQ() {

    const list_faqs = [
        {
            question: "Quá trình kiểm định xe được diễn ra như thế nào tại CitiCar?",
            answers: [
                "Đội ngũ kỹ thuật viên của chúng tôi sẽ kiểm định xe từ ngoại thất đến nội thất, bao gồm luôn cả động cơ xe và các bộ phận có yếu tố hao mòn khác.",
            ]
        },
        {
            question: "Việc kiểm định xe sẽ được diễn ra tại đâu?",
            answers: [
                "Để việc kiểm định xe được diễn ra theo đúng quy trình tiêu chuẩn của chúng tôi, quý khách vui lòng mang xe đến cửa hàng - chi tiết địa chỉ văn phòng xem tại Website."
            ]
        },
        {
            question: "Tôi có phải trả thêm phụ phí nào khác khi mua xe tại CitiCar không?",
            answers: [
                "Toàn bộ chi phí khi chúng tôi báo giá với quý khách là giá tiền sau cùng, sẽ không phát sinh phụ phí nào khác. Trong trường hợp quý khách thực hiện trả góp, ngân hàng cung cấp dịch vụ có thể sẽ thu các loại phí theo quy định của ngân hàng.",
            ]
        },
        {
            question: "CitiCar có hỗ trợ tôi thực hiện các giấy tờ và thủ tục pháp lý không?",
            answers: [
                "Đội ngũ chuyên viên của CitiCar luôn sẵn sàng hỗ trợ quý khách hàng thực hiện các giấy tờ và thủ tục pháp lý liên quan."
            ]
        },
        {
            question: "CitiCar có cung cấp dịch vụ ký gửi không?",
            answers: [
                "Chúng tôi có cung cấp dịch vụ ký gửi theo từng trường hợp khách hàng. Quý khách vui lòng liên hệ các chuyên viên của chúng tôi để được hỗ trợ."
            ]
        },
    ]

    return (
        <>
            <div className=" bg-grey-color px-3 py-10 xl:px-20 xl:py-16">
                <h2 className="font-semibold text-center text-2xl md:text-3xl text-primary-color px-2 md:px-3">Các nội dung thường được tư vấn</h2>
                <div className="section-title-underline bg-primary-color"></div>
                <div className='mt-10'>
                    {
                        list_faqs.map(faq => (
                            <Collapse key={faq.question} title={faq.question} className={"block w-full text-base text-start font-semibold py-4"} borderBottom={'border-b border-b-grey-color-200 border-opacity-70'}>
                                <div className="pb-4 mx-4 font-medium">
                                    {
                                        faq.answers.length === 1 ?
                                            faq.answers.map((ans) => (
                                                <p key={ans}>
                                                    {ans}
                                                </p>
                                            )) :
                                            faq.answers.map((ans, index) => (
                                                <p key={ans} >
                                                    {index + 1}. {ans}
                                                </p>
                                            ))
                                    }
                                </div>
                            </Collapse>
                        ))
                    }
                </div>
                <div className='text-center mt-8'>
                    <Link to='/' className="text-center text-primary-color font-semibold p-3">Xem thêm</Link>
                </div>
            </div>
        </>
    )
}

export default FAQ