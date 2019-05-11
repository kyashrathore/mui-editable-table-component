# mui-editable-table-component

| props           | type             | description                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultData     | array of objects | rows of data already added                                                                                                                                                                                                                                                                                                                    |
| fieldsArr       | array of objects | each obj with **validation** key a function which is called with event and its columns data,here check validation return false to show error,**label** for table head(required),name(required),you can give **type**(optional) select,if you give select type then **selectMessage**,**options** are required,**error** message to show error |
| getData         | function         | this function is called on save and delete to provide all data to parent                                                                                                                                                                                                                                                                      |
| tableName       | string           | name of table,default is mytable                                                                                                                                                                                                                                                                                                              |
| initWithoutHead | boolean          | if true only show add button and no heads,if no data available                                                                                                                                                                                                                                                                                |
| addRowBtnText   | string           | button text for add Row Button                                                                                                                                                                                                                                                                                                                |

---

Example and source code available at [codesandbox](https://codesandbox.io/s/oj4x9rxl89)

```

const fieldsArr = const fieldsArr = [
  {
    label: "Name of UBO", (required)
    name: "name", (required)
    validation: (e,coloumnData) => {
      const name = e.target.value;
      if (name.length > 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "Enter a good name"
  },
 {
    label: "RelationShip",
    selectMessage: "Select",
    name: "relationship",
    type: "select",
    options: [
      { label: "None", value: "" },
      { label: "Share Holder", value: "shareholder" },
      { label: "Director", value: "director" }
    ],
    validation: (e, a) => {
      const name = e.target.value;
      if (name.length > 6) {
        return false;
      } else {
        return true;
      }
    },
    error: "go home kid"
  },
];

 <EditableTable
  defaultData={[]}
  giveToParent={getData}
  fieldsArr={fieldsArr}
/>
```

## CSS Usage

To apply css you have below keys available for each correspondence tag element. Also if you want to use old css classnames,then these keys with sufix \_tableName are also available.

```
import EditableTable from 'mui-editable-table-component'

 const styles = () => ({
  table: {},
  tableHead: {},
  tableHeadRow: {},
  tableHeadCell: {},
  tableBody: {},
  tableBodyRow: {},
  tableBodyCell: {},
  inputWrapperDiv: {},
  input: {},
  error: {},
  selectFormControl: {},
  selectInputLabel: {},
  select: {},
  selectMenuItem: {},
  saveBtn: {},
  cancelBtn: {},
  addBtn: {},
  deleteBtn: {},
  editBtn: {}
});

for plain old css(if table is mytable)

.table_mytable{
background:red;
}
.tableHead_mytable{
colour:blue;
}

export default withStyles(styles)(EditableTable);


```
