$(document).ready(function(){function t(t){return Array.prototype.slice.call(t)}function n(n){return n.map(function(n){return t(n)})}function e(t,e){for(var r=0;r<t.length;r++)s.push(n(t)[r].map(function(t){return"INPUT"===t.tagName&&t}).filter(Boolean).map(function(t){return"true"===t.value?1:0})),m.push(n(t)[r].map(function(t){return"INPUT"===t.tagName&&t}).filter(Boolean).map(function(t){return t.checked?1:0}));c.push(i.map(function(t){return t.value}))}function r(){var t=u(s),n=u(m);f=[];for(var e=0;e<i.length;e++)p[e]===c[0][e]?f.push(1):f.push(0);for(var r=0;r<l.length;r++){for(var o=0,a=0;a<=s[r].length-1;a++)s[r][a]===m[r][a]&&0!==s[r][a]&&(o+=1);o<=t[r]&&0!==o&&n[r]<=t[r]?f.push(o/t[r]):f.push(0)}}function u(t){return t.map(function(t){return t.reduce(function(t,n){return t+n})})}function o(t){return t=t.reduce(function(t,n){return t+n}).toString(),L=t.length,"1"===t[L-2]?" балів":"2"===t[L-1]||"3"===t[L-1]||"4"===t[L-1]?" бала":"1"===t[L-1]?" бал":" балів"}$("#submit").on("click",function(){document.location.href="http://localhost:9000/inner_pages/marks.html"});var a=window.location.href;if("http://localhost:9000/inner_pages/practice.html"===a){var i=[],c=[],l=[],s=[],m=[],f=[],p=["ахмад","альтиметр","авіатор","гугл","хобі","хаскі","інтернет","менеджмент","маніпуляція","медіа плеєр","московський","орт","перфоратор","платформа","ресурс","спешіал сістем індастрі","тег","турбогенератор","відео","зара"],h=document.getElementById("submit");h.addEventListener("click",function(n){n.preventDefault(),s=[],m=[],i=document.getElementsByName("transliteration"),l=document.getElementsByClassName("question-wrap"),i=t(t(i)),l=t(t(l).map(function(t){return t.childNodes})),e(l,i),r(f),f=f.reduce(function(t,n){return t+n})+o(f)+" з 80",window.sessionStorage.setItem("myResult",f)},!1)}else if("http://localhost:9000/inner_pages/marks.html"===a){var d=window.sessionStorage.getItem("myResult");document.getElementById("final-mark").innerText=d+""}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcm96LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaW50b0FycmF5Iiwibm9kZUxpc3QiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsIml0ZW1Ub0FycmF5Iiwibm9kZUxpc3QyIiwibWFwIiwieCIsInJlYWRpbmdGcm9tRm9ybXMiLCJsaXN0IiwiaW5wdXRMaXN0IiwiaSIsImxlbmd0aCIsImFycmF5VmFsdWVzIiwicHVzaCIsInRhZ05hbWUiLCJmaWx0ZXIiLCJCb29sZWFuIiwidmFsdWUiLCJjaGVja2VkVmFsdWVzIiwiY2hlY2tlZCIsInRybGl0QXJyYXlWYWx1ZXMiLCJ0cmxpdEFycmF5IiwiY2FsY3VsYXRlUmVzdWx0IiwiYW1vdW50T2ZSaWdodEFuc3dlcnMiLCJjaGVhdGVyRGV0ZWN0aW9uIiwiYW1vdW50T2ZBbnN3ZXJzIiwibWFyayIsIml0ZXIiLCJfUmlnaHRJbnB1dHMiLCJ0ZXN0QXJyYXkiLCJjb3VudGVyIiwiaiIsInNvbWVBcnJheSIsInJlZHVjZSIsImFjYyIsInZhbCIsImVuZGluZyIsInAxIiwicDIiLCJ0b1N0cmluZyIsIkwiLCJvbiIsImxvY2F0aW9uIiwiaHJlZiIsIndpbmRvdyIsImxvb2siLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIm1hcmtTdG9yYWdlIiwiZ2V0SXRlbSIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FtRWQsUUFBU0MsR0FBVUMsR0FDZixNQUFPQyxPQUFNQyxVQUFVQyxNQUFNQyxLQUFLSixHQUd0QyxRQUFTSyxHQUFZQyxHQUNqQixNQUFPQSxHQUFVQyxJQUFJLFNBQVVDLEdBQzNCLE1BQU9ULEdBQVVTLEtBSXpCLFFBQVNDLEdBQWlCQyxFQUFNQyxHQUM1QixJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUYsRUFBS0csT0FBUUQsSUFFN0JFLEVBQVlDLEtBQUtWLEVBQVlLLEdBQU1FLEdBQUdMLElBQUksU0FBVUMsR0FDaEQsTUFBcUIsVUFBZEEsRUFBRVEsU0FBc0JSLElBQ2hDUyxPQUFPQyxTQUFTWCxJQUFJLFNBQVVDLEdBQzdCLE1BQW1CLFNBQVpBLEVBQUVXLE1BQW1CLEVBQUksS0FFcENDLEVBQWNMLEtBQUtWLEVBQVlLLEdBQU1FLEdBQ2hDTCxJQUFJLFNBQVVDLEdBQ1gsTUFBcUIsVUFBZEEsRUFBRVEsU0FBc0JSLElBRWxDUyxPQUFPQyxTQUNQWCxJQUFJLFNBQVVDLEdBQ1gsTUFBT0EsR0FBRWEsUUFBVSxFQUFJLElBTW5DQyxHQUFpQlAsS0FBS1EsRUFBV2hCLElBQUksU0FBVUMsR0FDdkMsTUFBT0EsR0FBRVcsU0FPckIsUUFBU0ssS0FDTCxHQUFJQyxHQUF1QkMsRUFBaUJaLEdBQ3hDYSxFQUFrQkQsRUFBaUJOLEVBQ3ZDUSxLQUVBLEtBQUssR0FBSUMsR0FBTyxFQUFHQSxFQUFPTixFQUFXVixPQUFRZ0IsSUFDekNDLEVBQWFELEtBQVFQLEVBQWlCLEdBQUdPLEdBQVNELEVBQUtiLEtBQUssR0FBS2EsRUFBS2IsS0FBSyxFQUcvRSxLQUFLLEdBQUlILEdBQUksRUFBR0EsRUFBSW1CLEVBQVVsQixPQUFRRCxJQUFLLENBRXZDLElBQUssR0FERG9CLEdBQVUsRUFDTEMsRUFBSSxFQUFHQSxHQUFLbkIsRUFBWUYsR0FBR0MsT0FBUyxFQUFHb0IsSUFDeENuQixFQUFZRixHQUFHcUIsS0FBT2IsRUFBY1IsR0FBR3FCLElBQTRCLElBQXRCbkIsRUFBWUYsR0FBR3FCLEtBQzVERCxHQUFvQixFQUl4QkEsSUFBV1AsRUFBcUJiLElBQWtCLElBQVpvQixHQUFpQkwsRUFBZ0JmLElBQU1hLEVBQXFCYixHQUNsR2dCLEVBQUtiLEtBQUtpQixFQUFVUCxFQUFxQmIsSUFFeENnQixFQUFLYixLQUFLLElBTXZCLFFBQVNXLEdBQWlCUSxHQUN0QixNQUFPQSxHQUNGM0IsSUFBSSxTQUFVQyxHQUNYLE1BQU9BLEdBQUUyQixPQUFPLFNBQVVDLEVBQUtDLEdBQzNCLE1BQU9ELEdBQU1DLE1BSzdCLFFBQVNDLEdBQU9uQixHQUlaLE1BSEFBLEdBQVFBLEVBQU1nQixPQUFPLFNBQVVJLEVBQUlDLEdBQUssTUFBT0QsR0FBR0MsSUFBTUMsV0FDeERDLEVBQUt2QixFQUFNTixPQUVNLE1BQWRNLEVBQU11QixFQUFFLEdBQWtCLFNBQ1AsTUFBZHZCLEVBQU11QixFQUFFLElBQTJCLE1BQWR2QixFQUFNdUIsRUFBRSxJQUEyQixNQUFkdkIsRUFBTXVCLEVBQUUsR0FBa0IsUUFDdEQsTUFBZHZCLEVBQU11QixFQUFFLEdBQWtCLE9BQ3RCLFNBbEpoQjlDLEVBQUUsV0FBVytDLEdBQUcsUUFBUyxXQUNyQjlDLFNBQVMrQyxTQUFTQyxLQUFPLGdEQUc3QixJQUFJRCxHQUFXRSxPQUFPRixTQUFTQyxJQUUvQixJQUFpQixvREFBYkQsRUFBZ0UsQ0FFaEUsR0FBSXJCLE1BQ0FELEtBRUFTLEtBQ0FqQixLQUNBTSxLQUVBUSxLQUVBRSxHQUFnQixRQUFTLFlBQWEsVUFDdEMsT0FBUSxPQUFRLFFBQVMsV0FBWSxhQUFjLGNBQWUsY0FBZSxjQUFlLE1BQ2hHLGFBQWMsWUFBYSxTQUFVLDBCQUEyQixNQUFPLGlCQUFrQixRQUFTLFFBRWxHaUIsRUFBT2xELFNBQVNtRCxlQUFlLFNBSW5DRCxHQUFLRSxpQkFBaUIsUUFBUyxTQUFVQyxHQUNyQ0EsRUFBTUMsaUJBRU5yQyxLQUNBTSxLQUNBRyxFQUFhMUIsU0FBU3VELGtCQUFrQixtQkFFeENyQixFQUFZbEMsU0FBU3dELHVCQUF1QixpQkFNNUM5QixFQUFheEIsRUFBVUEsRUFBVXdCLElBR2pDUSxFQUFZaEMsRUFBVUEsRUFBVWdDLEdBQzNCeEIsSUFBSSxTQUFVQyxHQUNYLE1BQU9BLEdBQUU4QyxjQUlqQjdDLEVBQWlCc0IsRUFBV1IsR0FFNUJDLEVBQWdCSSxHQUVoQkEsRUFBT0EsRUFBS08sT0FBTyxTQUFVSSxFQUFJQyxHQUN6QixNQUFPRCxHQUFLQyxJQUNYRixFQUFPVixHQUFRLFFBQ3hCa0IsT0FBT1MsZUFBZUMsUUFBUSxXQUFZNUIsS0FDM0MsT0FLRixJQUFpQixpREFBYmdCLEVBQTZELENBQ2xFLEdBQUlhLEdBQWNYLE9BQU9TLGVBQWVHLFFBQVEsV0FDaEQ3RCxVQUFTbUQsZUFBZSxjQUFjVyxVQUFZRixFQUFjIiwiZmlsZSI6Im1vcm96LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoXCIjc3VibWl0XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdodHRwOi8vbG9jYWxob3N0OjkwMDAvaW5uZXJfcGFnZXMvbWFya3MuaHRtbCc7XG4gICAgfSk7XG4gICAgXG4gICAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgICBpZiAobG9jYXRpb24gPT09ICdodHRwOi8vbG9jYWxob3N0OjkwMDAvaW5uZXJfcGFnZXMvcHJhY3RpY2UuaHRtbCcpIHtcblxuICAgICAgICB2YXIgdHJsaXRBcnJheSA9IFtdO1xuICAgICAgICB2YXIgdHJsaXRBcnJheVZhbHVlcyA9IFtdO1xuXG4gICAgICAgIHZhciB0ZXN0QXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIGFycmF5VmFsdWVzID0gW107XG4gICAgICAgIHZhciBjaGVja2VkVmFsdWVzID0gW107XG5cbiAgICAgICAgdmFyIG1hcmsgPSBbXTtcblxuICAgICAgICB2YXIgX1JpZ2h0SW5wdXRzID0gWyfQsNGF0LzQsNC0JywgJ9Cw0LvRjNGC0LjQvNC10YLRgCcsICfQsNCy0ZbQsNGC0L7RgCcsXG4gICAgICAgICAgICAn0LPRg9Cz0LsnLCAn0YXQvtCx0ZYnLCAn0YXQsNGB0LrRlicsICfRltC90YLQtdGA0L3QtdGCJywgJ9C80LXQvdC10LTQttC80LXQvdGCJywgJ9C80LDQvdGW0L/Rg9C70Y/RhtGW0Y8nLCAn0LzQtdC00ZbQsCDQv9C70LXRlNGAJywgJ9C80L7RgdC60L7QstGB0YzQutC40LknLCAn0L7RgNGCJyxcbiAgICAgICAgICAgICfQv9C10YDRhNC+0YDQsNGC0L7RgCcsICfQv9C70LDRgtGE0L7RgNC80LAnLCAn0YDQtdGB0YPRgNGBJywgJ9GB0L/QtdGI0ZbQsNC7INGB0ZbRgdGC0LXQvCDRltC90LTQsNGB0YLRgNGWJywgJ9GC0LXQsycsICfRgtGD0YDQsdC+0LPQtdC90LXRgNCw0YLQvtGAJywgJ9Cy0ZbQtNC10L4nLCAn0LfQsNGA0LAnXTtcblxuICAgICAgICB2YXIgbG9vayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcblxuICAgICAgICAvLyDQodGH0LjRgtGL0LLQsNGOINC+0YLQstC10YLRiyDQuCDRgdGA0LDQstC90LjQstCw0Y4g0YEg0L/RgNCw0LLQuNC70YzQvdGL0LzQuCDQv9C+INC90LDQttCw0YLQuNGOINC60L3QvtC/0LrQuFxuXG4gICAgICAgIGxvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGFycmF5VmFsdWVzID0gW107XG4gICAgICAgICAgICBjaGVja2VkVmFsdWVzID0gW107XG4gICAgICAgICAgICB0cmxpdEFycmF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3RyYW5zbGl0ZXJhdGlvbicpO1xuXG4gICAgICAgICAgICB0ZXN0QXJyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicXVlc3Rpb24td3JhcFwiKTtcblxuXG4gICAgICAgICAgICAvLyDQv9GA0LXQstGA0LDRidCw0Y4gSFRNTC3QutC+0LvQu9C10LrRhtC40Y4g0LIg0LzQsNGB0YHQvNCyLFxuICAgICAgICAgICAgLy8g0L/QvtC70YPRh9Cw0Y4g0LzQsNGB0YHQuNCyIEhUTUwt0LrQvtC70LvQtdC60YbQuNC5INC4INGD0LbQtSDQuNGFINC/0YDQtdCy0YDQsNGJ0LDRjiDQsiDQvNCw0YHRgdC40LLRi1xuICAgICAgICAgICAgLy8g0L/QvtC70YPRh9Cw0Y4g0LzQsNGB0YHQuNCyINC80LDRgdGB0LjQstC+0LJcbiAgICAgICAgICAgIHRybGl0QXJyYXkgPSBpbnRvQXJyYXkoaW50b0FycmF5KHRybGl0QXJyYXkpKTtcblxuXG4gICAgICAgICAgICB0ZXN0QXJyYXkgPSBpbnRvQXJyYXkoaW50b0FycmF5KHRlc3RBcnJheSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LmNoaWxkTm9kZXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmVhZGluZ0Zyb21Gb3Jtcyh0ZXN0QXJyYXksIHRybGl0QXJyYXkpOyAvLyDRgdGH0LjRgtGL0LLQsNGOINC/0YDQsNCy0LjQu9GM0L3Ri9C1INC+0YLQstC10YLRiyDQv9C+INGD0YHQu9C+0LLQuNGOINC4INC+0YLQvNC10YfQtdC90L3Ri9C1INGO0LfQtdGA0L7QvFxuXG4gICAgICAgICAgICBjYWxjdWxhdGVSZXN1bHQobWFyayk7IC8vINGB0YDQsNCy0L3QuNCy0LDRjiDQv9GA0LDQstC40LvRjNC90YvQtSDQvtGC0LLQtdGC0Ysg0YEg0YLQtdC8LCDRh9GC0L4g0L7RgtC80LXRgtC40LvQuCwg0Lgg0YHRh9C40YLQsNGOINGE0LjQvdCw0LvRjNC90YvQuSDQsdCw0LvQu1xuXG4gICAgICAgICAgICBtYXJrID0gbWFyay5yZWR1Y2UoZnVuY3Rpb24gKHAxLCBwMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDEgKyBwMlxuICAgICAgICAgICAgICAgIH0pICsgZW5kaW5nKG1hcmspICsgJyDQtyA4MCc7XG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbXlSZXN1bHQnLCBtYXJrKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG5cbiAgICB9XG5cbiAgICBlbHNlIGlmIChsb2NhdGlvbiA9PT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9pbm5lcl9wYWdlcy9tYXJrcy5odG1sJykge1xuICAgICAgICB2YXIgbWFya1N0b3JhZ2UgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbXlSZXN1bHQnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmFsLW1hcmsnKS5pbm5lclRleHQgPSBtYXJrU3RvcmFnZSArICcnO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW50b0FycmF5KG5vZGVMaXN0KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVtVG9BcnJheShub2RlTGlzdDIpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVMaXN0Mi5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRvQXJyYXkoeClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkaW5nRnJvbUZvcm1zKGxpc3QsIGlucHV0TGlzdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgYXJyYXlWYWx1ZXMucHVzaChpdGVtVG9BcnJheShsaXN0KVtpXS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC50YWdOYW1lID09PSAnSU5QVVQnID8geCA6IGZhbHNlXG4gICAgICAgICAgICB9KS5maWx0ZXIoQm9vbGVhbikubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWUgPT09ICd0cnVlJyA/IDEgOiAwXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjaGVja2VkVmFsdWVzLnB1c2goaXRlbVRvQXJyYXkobGlzdClbaV1cbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRhZ05hbWUgPT09ICdJTlBVVCcgPyB4IDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LmNoZWNrZWQgPyAxIDogMFxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGV4dCBJbnB1dCBzZWN0aW9uXG4gICAgICAgIHRybGl0QXJyYXlWYWx1ZXMucHVzaCh0cmxpdEFycmF5Lm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVSZXN1bHQoKSB7XG4gICAgICAgIHZhciBhbW91bnRPZlJpZ2h0QW5zd2VycyA9IGNoZWF0ZXJEZXRlY3Rpb24oYXJyYXlWYWx1ZXMpOyAvLyDQvNCw0YHRgdC40LIg0LjQtyDQutC+0LvQuNGH0LXRgdGC0LIg0L/RgNCw0LLQuNC70YzQvdGL0YUg0L7RgtCy0LXRgtC+0LIg0LIg0LLQvtC/0YDQvtGB0LVcbiAgICAgICAgdmFyIGFtb3VudE9mQW5zd2VycyA9IGNoZWF0ZXJEZXRlY3Rpb24oY2hlY2tlZFZhbHVlcyk7IC8vINC80LDRgdGB0LjQsiDQuNC3INC60L7Qu9C40YfQtdGB0YLQsiDQstGL0LHRgNCw0L3QvdGL0YUg0L7RgtCy0LXRgtC+0LIg0LIg0LLQvtC/0YDQvtGB0LVcbiAgICAgICAgbWFyayA9IFtdOyAvLyDQvNCw0YHRgdC40LIg0LLQtdGA0L3Ri9GFINC+0YLQstC10YLQvtCyINC30LAg0LrQsNC20LTRi9C5INCy0L7Qv9GA0L7RgVxuICAgICAgICAvLyBUZXh0IElucHV0IHNlY3Rpb25cbiAgICAgICAgZm9yICh2YXIgaXRlciA9IDA7IGl0ZXIgPCB0cmxpdEFycmF5Lmxlbmd0aDsgaXRlcisrKSB7XG4gICAgICAgICAgICBfUmlnaHRJbnB1dHNbaXRlcl09PT10cmxpdEFycmF5VmFsdWVzWzBdW2l0ZXJdID8gIG1hcmsucHVzaCgxKSA6IG1hcmsucHVzaCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9IDA7IC8vINC/0YDQsNCy0LjQu9GM0L3Ri9GFINC+0YLQstC10YLQvtCyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBhcnJheVZhbHVlc1tpXS5sZW5ndGggLSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlWYWx1ZXNbaV1bal0gPT09IGNoZWNrZWRWYWx1ZXNbaV1bal0gJiYgYXJyYXlWYWx1ZXNbaV1bal0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50ZXIgPD0gYW1vdW50T2ZSaWdodEFuc3dlcnNbaV0gJiYgY291bnRlciAhPT0gMCAmJiBhbW91bnRPZkFuc3dlcnNbaV0gPD0gYW1vdW50T2ZSaWdodEFuc3dlcnNbaV0pIHtcbiAgICAgICAgICAgICAgICBtYXJrLnB1c2goY291bnRlciAvIGFtb3VudE9mUmlnaHRBbnN3ZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgbWFyay5wdXNoKDApO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWF0ZXJEZXRlY3Rpb24oc29tZUFycmF5KSB7XG4gICAgICAgIHJldHVybiBzb21lQXJyYXlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2MgKyB2YWw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZGluZyh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlZHVjZShmdW5jdGlvbiAocDEsIHAyKSB7cmV0dXJuIHAxK3AyIH0pLnRvU3RyaW5nKCk7XG4gICAgICAgIEwgPSAgdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgIGlmKHZhbHVlW0wtMl09PT0gJzEnKSByZXR1cm4gJyDQsdCw0LvRltCyJztcbiAgICAgICAgZWxzZSBpZih2YWx1ZVtMLTFdPT09ICcyJyB8fCB2YWx1ZVtMLTFdPT09ICczJyB8fCB2YWx1ZVtMLTFdPT09ICc0JykgcmV0dXJuICcg0LHQsNC70LAnO1xuICAgICAgICBlbHNlIGlmKHZhbHVlW0wtMV09PT0gJzEnKSByZXR1cm4gJyDQsdCw0LsnO1xuICAgICAgICBlbHNlIHJldHVybiAnINCx0LDQu9GW0LInO1xuICAgIH1cbn0pOyJdfQ==
