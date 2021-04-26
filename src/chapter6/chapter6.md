## Chapter 6 기본적인 리팩토링

### 6.6 변수 캡슐화하기

- 변수를 직접 사용하게 되면 변경에 취약하다.
  - 예를들어 함수를 사용하게 되면 일단 그 함수가 다른 함수를 호출하도록 바꾼 후 수정하면 되지만, 변수를 사용하게 되면 그 변수를 참조하는 모든 곳을 한번에 바꿔줘야함.
- 데이터 변경을 한 곳에서 처리 가능
  - 데이터 변경 전 검증이나 변경 후 추가 로직을 쉽게 끼워넣을 수 있다.
- 불변 데이터는 캡슐화할 이유가 적음
  - 변경될 일이 없어서 위와 같은 변경 전 검증을 할 필요가 없기 때문

```ts
let defaultOwner = { firstName: "태희", lastName: "이" };

let getDefaultOwner = () => defaultOwner;

// 변수가 변경되는 경우
const newDefaultOwner = { firstName: "태희", lastName: "김" };

// getDefaultOwner 를 다음과 같이 먼저 변경한 후 리팩토링 가능
// let getDefaultOwner = () => newGetDefaultOwner();

const setDefaultOwner = (data: any) => {
  // 데이터 검증 / 사전 처리
  defaultOwner = data;
  // 데이터 사후 처리
};
```
