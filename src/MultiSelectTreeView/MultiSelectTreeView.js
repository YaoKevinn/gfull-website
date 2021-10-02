import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: "auto",
    flexGrow: 1,
    maxWidth: 400,
    color: '#777',
  },
  treeText: {
    fontSize: 18
  }
});

export default function MultiSelectTreeView(props) {
  const classes = useStyles();
  const categoryList = props.category;

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
       <TreeItem style={{marginTop: 20, marginBottom: 5}} nodeId="all" label={categoryList[0].ch} onClick={()=>props.categoryHandler(categoryList[0].esp)} />

       <TreeItem style={{marginBottom: 5}} nodeId="hotsale" label={categoryList[1].ch} onClick={()=>props.categoryHandler(categoryList[1].esp)} />

      <TreeItem style={{marginBottom: 5}} nodeId="gfull" label="禾富批发 G - Full">
          {
              categoryList.map(category => {
                  const prioridad = category.prioridad;
                  if (prioridad < 50 && prioridad > 1) {
                      return <TreeItem style={{marginBottom: 5}} key={prioridad} nodeId={String(prioridad)} label={category.ch} onClick={()=>props.categoryHandler(category.esp)} />
                  }else{
                    return null
                }
              })
          }
      </TreeItem>
      {/* <TreeItem style={{marginBottom: 5}} nodeId="daigou" label="进口超市商品代购">
      {
              categoryList.map(category => {
                  const prioridad = category.prioridad;
                  if (prioridad > 50) {
                      return <TreeItem style={{marginBottom: 5}} key={prioridad} nodeId={String(prioridad)} label={category.ch} onClick={()=>props.categoryHandler(category.esp)} />
                  }else{
                      return null
                  }
              })
          }
      </TreeItem> */}
    </TreeView>
  );
}