---
inject: true
to: scripts/post-build/components.ts
after: getComponents
---
  {
    name: "<%= name %>"
<% if(formValue!=="no"){   -%>
	,
	config: {
		vue: {
			vModel: [{ modelValue: '<%= formValue %>', binding: ':<%= formValue %>' }]
		},
		angular: {
			controlValueAccessor: '<%= formValue %>'
		}
	}
<% } -%>
  },
