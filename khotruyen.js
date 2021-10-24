let fake = document.querySelector(".thumbnail-container")



fake.innerHTML = ` <a href="#"><div class="fake-img" style="background-color: #2C7ABE;"></div></a>
<div class="thumbnail-text">
    <a href="#"><h3>Tên Truyện</h3></a>
    <a href="#"><p>Chapter 123</p></a>
</div>
<div class="tag upload-time">
    <p>2 giờ trước</p>
</div>
<div class="thumbnail-intro-box intro-pop">
    <div class="arrow-container">
        <div class="arrow"></div>
    </div>
    <div class="thumbnail-intro-container">
        <div class="thumbnail-heading-text">
            <h2>muda</h2>
            <p>Tình trạng: Đang cập nhật</p>
            <p>Lượt xem: 123456</p>
            <p>Lượt theo dõi: loading...</p>
        </div>
        <div class="thumbnail-tag-container">
            <a href="#" class="tag thumbnail-tag">Lorem</a>
            <a href="#" class="tag thumbnail-tag">Lorem</a>
            <a href="#" class="tag thumbnail-tag">Lorem</a>
            <a href="#" class="tag thumbnail-tag">Lorem, ipsum</a>
            <a href="#" class="tag thumbnail-tag">Tên Truyện</a>
            <a href="#" class="tag thumbnail-tag">Lorem</a>
        </div>
        <div class="thumbnail-intro-text">
            <p>mô tả</p>
        </div>
    </div>
</div>
</div>`

for(let i = 0; i < 10; i++){
    fake.innerHTML = ` <a href="#"><div class="fake-img" style="background-color: #2C7ABE;"></div></a>
<div class="thumbnail-text">
    <a href="#"><h3>Tên Truyện</h3></a>
    <a href="#"><p>Chapter 123</p></a>
</div>
<div class="tag upload-time">
    <p>2 giờ trước</p>
</div>
<div class="thumbnail-intro-box intro-pop">
    <div class="arrow-container">
        <div class="arrow"></div>
    </div>
    <div class="thumbnail-intro-container">
        <div class="thumbnail-heading-text">
            <h2>muda</h2>
            <p>Tình trạng: Đang cập nhật</p>
            <p>Lượt xem: 123456</p>
            <p>Lượt theo dõi: loading...</p>
        </div>
        <div class="thumbnail-tag-container">
            <a href="#" class="tag thumbnail-tag">Lorem</a>
            <a href="#" class="tag thumbnail-tag">Lorem</a>
            <a href="#" class="tag thumbnail-tag">Lorem</a>
            <a href="#" class="tag thumbnail-tag">Lorem, ipsum</a>
            <a href="#" class="tag thumbnail-tag">Tên Truyện</a>
            <a href="#" class="tag thumbnail-tag">Lorem</a>
        </div>
        <div class="thumbnail-intro-text">
            <p>mô tả</p>
        </div>
    </div>
</div>
</div>`
}

let fake = [
    {
        time: "2 giờ trước",
        img:"https://st.imageinstant.net/data/comics/209/dao-hai-tac.jpg",
        name:"tên truyện",
        chapter:"1",
        status:"đang cập nhật",
        view: 12345,
        category: ["thể loại"],
        des: "truyện rất hay",
    }
]