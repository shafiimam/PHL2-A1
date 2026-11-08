# Type Aliases vs. Interfaces in TypeScript

## Introduction

Typescript provides us both `type` aliases and `interface` declarations for defining shape of our data. They mix and match together when defining obects, so either can work for our  everyday cases. The main differences are what they can represent and how they behave when declarations share a name.

## Choosing Between Them

We can use an interface when describing an object or define class contract, especially when we expect it to be extended or augmented:

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

We can merge declarations by using interface which means another `interface User` declaration adds its members to the original. This can be useful when extending library types, But we need to be cautious of accidental duplicate declarations which may also change a type unexpectedly.
 
 
Type alias is used when we need more than an object shape, such as a union, tuple, or primitive alias:

```ts
type Status = "pending" | "active" | "disabled";
type Coordinate = [latitude: number, longitude: number];
type UserOrId = User | number;
```

Type aliases can also describe objects and combine types with intersections (`&`) and Unlike interfaces, an existing alias cannot be reopened through declaration merging. Both forms can be extended in different ways: interfaces use `extends`, while aliases can use intersections. In many object cases, the choice is stylistic; consistency within a project matters.

## Conclusion

`interface` is used for extensible object contracts and `type` for unions, tuples, and other flexible compositions.