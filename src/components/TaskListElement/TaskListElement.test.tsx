/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, test } from "vitest";
import { ITaskElement } from "../../interface/ITaskState";
import { TaskListElement } from './TaskListElement';
import { render, screen } from "@testing-library/react";

describe("test render of Task list element", () => {
    test("corectly render list element data data", () => {
        // arrange our test elements, like mock data or render wrapper
        const list: ITaskElement[] = [
            {
                description: "Task description",
                id: "loremIpsum",
                status: "todo",
                title: "Task title"
            }
        ]
        const wrapper = render(<TaskListElement list={list} title="Test title"/>)
        
        // act -> do stuff that we wanna test, like find word or execute some function
        // first our main title
        const title = screen.getByText(/Test title List/);
        // our single task title
        const taskTitle = screen.getByText(/Task title/);

        // assert -> check if values in act are correct and match to expected outcomes
        expect(wrapper).toBeTruthy();
        expect(title).toBeTruthy();
        expect(taskTitle).toBeDefined();
    })

    test("check what happens on empty list", () => {
        // arrange
        const list: ITaskElement[] = [];
        const wrapper = render(<TaskListElement list={list} title="empty title"/>)

        // act
        const message = screen.getByText(/Currently, there is no empty title/);

        expect(wrapper).toBeTruthy();
        expect(message).toBeTruthy();
    })
})