import {
  getVisibleTasks,
  getTasksWithFilter
} from "./visibilityFilter-reducer";
import moment from "moment";

let currentDate = moment().format("YYYY-MM-DD");
const tomorrow = moment("2019-11-17").format("YYYY-MM-DD");

const tasks = [
  {
    id: 1,
    text: "Learn programming 7 hour every day",
    date: currentDate,
    checked: false
  },
  {
    id: 2,
    text: "Smile",
    date: currentDate,
    checked: false
  },
  {
    id: 3,
    text: "Sleep 8 hours",
    date: currentDate,
    checked: true
  },
  {
    id: 4,
    text: "Sleep 9 hours",
    date: tomorrow,
    checked: false
  },
  {
    id: 5,
    text: "Go to the park",
    date: tomorrow,
    checked: false
  },
  {
    id: 6,
    text: "To do task home",
    date: tomorrow,
    checked: false
  }
];
describe("visibleFilter", () => {
  describe("getVisibleTasks", () => {
    it("filtering of type SHOW-TODAY-TASK", () => {
      expect(
        getVisibleTasks(
          { toDoList: { tasks } },
          { listName: "SHOW-TODAY-TASK" }
        )
      ).toEqual([
        {
          checked: false,
          date: "2019-11-17",
          id: 1,
          text: "Learn programming 7 hour every day"
        },
        { checked: false, date: "2019-11-17", id: 2, text: "Smile" },
        { checked: true, date: "2019-11-17", id: 3, text: "Sleep 8 hours" }
      ]);
    });

    it("filtering of type SHOW-TOMORROW-TASK", () => {
      expect(
        getVisibleTasks(
          { toDoList: { tasks } },
          { listName: "SHOW-TOMORROW-TASK" }
        )
      ).toEqual([
        { checked: false, date: "2019-11-18", id: 4, text: "Sleep 9 hours" },
        { checked: false, date: "2019-11-18", id: 5, text: "Go to the park" },
        { checked: false, date: "2019-11-18", id: 6, text: "To do task home" }
      ]);
    });
  });
  describe("visibility status-filter", () => {
    it("filtering of type SHOW-ALL", () => {
      expect(
        getTasksWithFilter(
          { toDoList: { tasks } },
          { listName: "SHOW-TODAY-TASK", statusFilter: "SHOW-All" }
        )
      ).toEqual([
        {
          checked: false,
          date: "2019-11-17",
          id: 1,
          text: "Learn programming 7 hour every day"
        },
        { checked: false, date: "2019-11-17", id: 2, text: "Smile" },
        { checked: true, date: "2019-11-17", id: 3, text: "Sleep 8 hours" },
        { checked: false, date: "2019-11-18", id: 4, text: "Sleep 9 hours" },
        { checked: false, date: "2019-11-18", id: 5, text: "Go to the park" },
        { checked: false, date: "2019-11-18", id: 6, text: "To do task home" }
      ]);
    });
    it("filtering of type SHOW-ACTIVE", () => {
      expect(
        getTasksWithFilter(
          { toDoList: { tasks } },
          { listName: "SHOW-TODAY-TASK", statusFilter: "SHOW-ACTIVE" }
        )
      ).toEqual([
        {
          checked: false,
          date: "2019-11-17",
          id: 1,
          text: "Learn programming 7 hour every day"
        },
        { checked: false, date: "2019-11-17", id: 2, text: "Smile" },
        { checked: false, date: "2019-11-18", id: 4, text: "Sleep 9 hours" },
        { checked: false, date: "2019-11-18", id: 5, text: "Go to the park" },
        { checked: false, date: "2019-11-18", id: 6, text: "To do task home" }
      ]);
    });
  });
});
