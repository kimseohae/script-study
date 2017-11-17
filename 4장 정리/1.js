function Foo(){};
        var Pee = new Foo();
        console.dir(Foo.__proto__ === Function.prototype);
        //Foo의 유일 객체는 모든 함수의 유일 객체인 Function의 유일 객체 이다..
        console.dir(Foo.prototype === new Foo().__proto__);
        //Foo로 만들어진 유일 객체는 모든 자식객체들의 부모가 객체가 된다.
        console.dir(Foo.prototype.__proto__ === Object.prototype);
        //Foo로 만들어진 유일 객체의 부모 객체는 조상격인 오브젝트의 유일 객체이다.
        console.dir(Foo.__proto__.__proto__ === Object.prototype);
        //Foo의 부모인 Function 유일 객체의 부모 객체는
        //조상격인 오브젝트의 유일 객체이다.
        console.dir(Foo.__proto__.__proto__ === Foo.prototype.__proto__);
        //따라서 Foo의 부모인 Function 유일 객체의 부모 객체는 (Object.prototype)
        //Foo로 만들어진 유일 객체의 부모객체와 동일하다 (Object.prototype)