import DiaryItem from "./DiaryItem";

const DiaryList = ({onEdit, onRemove, diaryList}) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
};
// diaryList의 값이 undefined or null 값이 오게되면 생기는 err 방지를 위이한 처리
DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;