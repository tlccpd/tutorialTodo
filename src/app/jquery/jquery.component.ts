import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// this is es5
// declare var $: any;

import * as $ from 'jquery';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JqueryComponent implements OnInit {
  todoList;

  constructor() { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    $.ajax({
      url: 'http://www.javabrain.kr:8080/api/todo',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        console.log(this.todoList);
        this.todoList = data;
        this.refresh();
      }
    });
  }

  refresh() {
    console.log('refresh');
    $('#todo_list').empty();

    this.todoList.forEach(function(item, index) {
      let todo =
        '<tr>' +
        '<td>' +
        '<input type="checkbox" ' + (item.isFinished ? 'checked' : '') + ' value="' + item.isFinished + '" ' +
        'onchange="update(' + index + ')">' +
        '</td>' +
        (item.isFinished ? '<td style="text-decoration: line-through">' : '<td>') + item.todo + '</td>' +
        '<td>' + item.created + '</td>' +
        '<td>' + item.updated + '</td>' +
        '<td>' +
        '<button type="button" onclick="remove(' + index + ')">삭제</button>' +
        '</td>' +
        '</tr>';
      $('#todo_list').append(todo);
    });
  }

  slide() {
    $('table.table tbody').slideToggle();
  }
}
