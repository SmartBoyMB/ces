
function KnowledgeTableModuleJS() {
    return {
        title: "知识点列表",
        icon: "person-stalker",
        titleBtn: {
            title: "添加知识点",
            click: function () {
                this.$emit("addKnowledge");
            }
        },
        count: 0,
        tableHead: [
            { title: "知识点名称", key: "name", align: "center" },
            { title: "能力点", key: "abilityName", align: "center" },
            {
                title: "操作",
                key: "action",
                align: "center",
                field:'right',
                width: 140,
                render: (h, params) => {
                    return h("div", [
                        h(
                            "span",
                            {
                                style: {
                                    color: "#2d8cf0",
                                    cursor: "pointer",
                                    margin: "0 5px"
                                },
                                on: {
                                    click: () => {
                                        this.editKnowledgeForm = {
                                            id:params.row.id,
                                            name: params.row.name,
                                            courseId: params.row.courseId,
                                            abilityId: params.row.abilityId,
                                            abilityName: params.row.abilityName,
                                        };
                                        this.editKnowledgeTo();
                                    }
                                }
                            },
                            "编辑"
                        ),
                        h(
                            "span",
                            {
                                style: {
                                    color: "#ed3f14",
                                    cursor: "pointer",
                                    margin: "0 5px"
                                },
                                on: {
                                    click: () => {
										this.$Modal.confirm({
                                            title: "<span style='color:red'><b>提示</b></span>",
                                            content: "确定要删除信息吗？",
                                            onOk: () => {
                                                this.deleteKnowledgeTo(params.row.id)
                                            },
                                            onCancel: () => {
                                            }
                                        }) 
                                    }
                                }
                            },
                            "删除"
                        )
                    ]);
                }
            }
        ],
        tableContent: []
    }
}
export { KnowledgeTableModuleJS }
