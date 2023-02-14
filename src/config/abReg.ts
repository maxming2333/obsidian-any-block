// 注意：修改正则要注意小括号的位置是否对应，不然还要去修改索引
export const ABReg = {
  reg_header: /^\s*(-\s)*\[(.*)\]/,  // /^\s*(>\s|-\s)*\[(.*?)\]/，需要小心会和callout语法冲突！！！

  reg_front: /^{\[.*?\]/,
  reg_end: /^}./,
  reg_list: /^\s*-\s(.*)/, //: /^\s*(>\s)*-\s(.*)$/
  reg_list2: /^(\s*)-\s(.*)/,
  reg_code: /^\s*(```|~~~)(.*)/, //: /^\s*(>\s|-\s)*(```|~~~)(.*)$/
  reg_quote: /^\s*>\s(.*)/,  // `- > ` 不匹配，要认为这种是列表
  reg_heading: /^(\#+)\s(.*)/,
}
