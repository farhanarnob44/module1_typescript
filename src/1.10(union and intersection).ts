{
  type frontendDev = "fakibaz dev" | "Junior dev";
  type backendDev = "beginner dev" | "expert dev";

  type fullStackDev = frontendDev | backendDev;

  const newDev: frontendDev = "Junior dev";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB";
  };

  const user1: User = {
    name: "farhan",
    gender: "male",
    bloodGroup: "O+",
  };

  // intersection

  type frontEndDeveloper = {
    skills: string[];
    designation1: "frontEnd Developer";
  };
  type backEndDeveloper = {
    skills: string[];
    designation2: "backEnd Developer";
  };

  type FullStackDeveloper = frontEndDeveloper & backEndDeveloper;

  const fullStackDeveloper : FullStackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "frontEnd Developer",
    designation2: "backEnd Developer",
  };
}
