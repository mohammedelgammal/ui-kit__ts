interface ClassEntry {
  condition: boolean;
  className: string;
}

function classNames(...classes: (string | ClassEntry | boolean)[]): string {
  const finalClasses: string[] = [];

  classes.forEach((classEntry) => {
    if (typeof classEntry === "string") {
      finalClasses.push(classEntry);
    } else if (typeof classEntry === "object") {
      if (classEntry.condition) {
        finalClasses.push(classEntry.className);
      }
    }
  });

  return finalClasses.join(" ");
}

export default classNames;
